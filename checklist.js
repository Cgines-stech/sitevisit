/*checklist.js*/
function saveChecklistItem() {
  const fileKey = flatFileList[currentFileIndex];
  const itemKey = checklistItems[currentItem];
  if (!fileKey || !itemKey) return;

  const selectedStatus = checklistContainer.querySelector('input[name="status"]:checked')?.value || "";
  const comment = checklistContainer.querySelector('textarea[name="comment"]')?.value || "";
  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");

  if (!allData[fileKey]) allData[fileKey] = {};
  allData[fileKey][itemKey] = { status: selectedStatus, comment };

  localStorage.setItem("checklist", JSON.stringify(allData));
}

function loadChecklist() {
  checklistContainer.innerHTML = "";

  const fileKey = flatFileList[currentFileIndex];
  const itemKey = checklistItems[currentItem];
  if (!fileKey || !itemKey) return;

  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");
  const itemData = allData[fileKey]?.[itemKey] || {};

  const label = document.createElement("h4");
  label.textContent = itemKey;
  checklistContainer.appendChild(label);

  ["Yes", "No", "N/A"].forEach(opt => {
    const wrapper = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "status";
    radio.value = opt;
    if (itemData.status === opt) radio.checked = true;

    radio.setAttribute("aria-label", `${itemKey} - ${opt}`);
    wrapper.appendChild(radio);
    wrapper.append(` ${opt}`);
    checklistContainer.appendChild(wrapper);
  });

  const textarea = document.createElement("textarea");
  textarea.name = "comment";
  textarea.placeholder = "Enter comment here...";
  textarea.value = itemData.comment || "";
  textarea.setAttribute("aria-describedby", "comment-help");
  checklistContainer.appendChild(textarea);

  // Save on interaction
  checklistContainer.querySelectorAll('input[name="status"]').forEach(input => {
    input.addEventListener("change", () => {
      saveChecklistItem();
      updateNavStatus(flatFileList[currentFileIndex]);
    });
  });

  textarea.addEventListener("input", () => {
    saveChecklistItem();
  });
}

window.updateNavStatus = updateNavStatus;
window.loadChecklist = loadChecklist;
window.saveChecklistItem = saveChecklistItem;

document.addEventListener("DOMContentLoaded", () => {
    const importFileInput = document.getElementById("importFile");

  if (importFileInput) {
    importFileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (e) {
        const content = e.target.result;
        try {
          let data;
          if (file.name.endsWith(".json")) {
            // JSON import (preferred for accuracy)
            data = JSON.parse(content);
            if (typeof data !== "object" || Array.isArray(data)) {
              throw new Error("Invalid checklist JSON structure.");
            }
          } else {
            // TXT import (attempt to parse the format from your download function)
            data = {};
            let currentFile = null;
            const lines = content.split("\n");
            for (const line of lines) {
              if (line.startsWith("File: ")) {
                currentFile = line.replace("File: ", "").trim();
                data[currentFile] = {};
              } else if (line.trim().startsWith("- ")) {
                const item = line.replace("- ", "").trim();
                const statusLine = lines[lines.indexOf(line) + 1]?.trim();
                const commentLine = lines[lines.indexOf(line) + 2]?.trim();

                const status = statusLine?.replace("Status: ", "") || "";
                const comment = commentLine?.replace("Comment: ", "") || "";

                if (currentFile && item) {
                  data[currentFile][item] = { status, comment };
                }
              }
            }
          }

          localStorage.setItem("checklist", JSON.stringify(data));
          alert("Checklist imported successfully!");
          location.reload(); // Refresh to reflect changes
        } catch (err) {
          alert("Failed to import checklist. Ensure it's valid JSON or exported TXT format.");
          console.error(err);
        }
      };
      reader.readAsText(file);
    });
  }
});
