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
  // ✅ IMPORT FILE (TXT or JSON)
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
            data = JSON.parse(content);
            if (typeof data !== "object" || Array.isArray(data)) {
              throw new Error("Invalid checklist JSON structure.");
            }
          } else {
            // Parse TXT: format = path/to/file: item = Yes (Comment: ...)
            data = {};
            const lines = content.split("\n");
            for (const line of lines) {
              const match = line.match(/^(.+?):\s*(.+?)\s*=\s*(Yes|No|N\/A)(?: \(Comment: (.+?)\))?$/i);
              if (!match) continue;

              const fileKey = match[1]?.trim();
              const itemKey = match[2]?.trim();
              const status = match[3];
              const comment = match[4] || "";

              if (!fileKey || !itemKey || !status) continue;
              if (!data[fileKey]) data[fileKey] = {};
              data[fileKey][itemKey] = { status, comment };
            }
          }

          localStorage.setItem("checklist", JSON.stringify(data));
buildNavTree();

// 🔄 Wait a moment for DOM to be built before updating icons
setTimeout(() => {
  flatFileList.forEach(fileKey => updateNavStatus(fileKey));
}, 50);

alert("Checklist imported successfully!");

        } catch (err) {
          alert("Failed to import checklist. Ensure it's valid JSON or exported TXT format.");
          console.error(err);
        }
      };
      reader.readAsText(file);
    });
  }
});
