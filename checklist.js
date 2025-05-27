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
  // ✅ DOWNLOAD BUTTON LOGIC
  const downloadBtn = document.getElementById("downloadBtn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const checklistData = JSON.parse(localStorage.getItem("checklist") || "{}");
    const flatFileList = JSON.parse(localStorage.getItem("flatFileList") || "[]");

    if (!Object.keys(checklistData).length || !flatFileList.length) {
      alert("No checklist data found to download.");
      return;
    }

    let output = "";
    flatFileList.forEach(fileKey => {
      const fileItems = checklistData[fileKey];
      if (!fileItems) return;
      for (const item in fileItems) {
        const { status } = fileItems[item];
        const keyPath = `${fileKey}/${item}`.replace(/\/+/g, "/");
        output += `${keyPath}: ${status?.trim() || ""}\n`;
      }
    });

    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "checklist_export.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}


  // ✅ UPLOAD FILE IMPORT (TXT FORMAT: path/to/file.pdf: Yes)
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
            // Parse TXT: format = path/to/file/item.pdf: Yes
            data = {};
            const lines = content.split("\n");
            for (const line of lines) {
              const [fullPath, statusRaw] = line.split(":");
              if (!fullPath || !statusRaw) continue;
              const cleanedPath = fullPath.trim();
              const status = statusRaw ? statusRaw.trim() : "";
              

              const parts = cleanedPath.split("/");
              const item = parts.pop();
              const fileKey = parts.join("/");

              if ((status || "").trim() !== "") {
  if (!data[fileKey]) data[fileKey] = {};
  data[fileKey][item] = { status, comment: "" };
}
            }
          }

          localStorage.setItem("checklist", JSON.stringify(data));
          alert("Checklist imported successfully!");
          location.reload();
        } catch (err) {
          alert("Failed to import checklist. Ensure it's valid JSON or exported TXT format.");
          console.error(err);
        }
      };
      reader.readAsText(file);
    });
  }
});
