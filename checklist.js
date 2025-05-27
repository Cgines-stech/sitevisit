/*checklist.js*/
function saveChecklistItem(fileKey, itemKey) {
  if (!fileKey || !itemKey) return;

  const selectedStatus = checklistContainer.querySelector(`input[name="status-${itemKey}"]:checked`)?.value || "";
  const comment = checklistContainer.querySelector(`textarea[name="comment-${itemKey}"]`)?.value || "";

  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");

  if (!allData[fileKey]) allData[fileKey] = {};
  const existing = allData[fileKey][itemKey] || {};

  allData[fileKey][itemKey] = {
    status: selectedStatus,
    comment,
    ...(existing.link && { link: existing.link })
  };

  localStorage.setItem("checklist", JSON.stringify(allData));
}


function loadChecklist() {
  checklistContainer.innerHTML = "";

  const fileKey = flatFileList[currentFileIndex];
  if (!fileKey) return;

  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");
  const fileData = allData[fileKey] || {};

  Object.entries(fileData).forEach(([itemKey, itemData]) => {
    const label = document.createElement("h4");
    label.textContent = itemKey;
    checklistContainer.appendChild(label);

    ["Yes", "No", "N/A"].forEach(opt => {
      const wrapper = document.createElement("label");
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `status-${itemKey}`;
      radio.value = opt;
      if (itemData.status === opt) radio.checked = true;

      radio.setAttribute("aria-label", `${itemKey} - ${opt}`);
      wrapper.appendChild(radio);
      wrapper.append(` ${opt}`);
      checklistContainer.appendChild(wrapper);
    });

    const textarea = document.createElement("textarea");
    textarea.name = `comment-${itemKey}`;
    textarea.placeholder = "Enter comment here...";
    textarea.value = itemData.comment || "";
    textarea.setAttribute("aria-describedby", "comment-help");
    checklistContainer.appendChild(textarea);

    // 🔗 Show link if present
    if (itemData.link) {
      const linkEl = document.createElement("div");
      linkEl.className = "checklist-link";
      linkEl.innerHTML = `<a href="${itemData.link}" target="_blank" rel="noopener">🔗 View related link</a>`;
      checklistContainer.appendChild(linkEl);
    }

    // Save handlers
    checklistContainer.querySelectorAll(`input[name="status-${itemKey}"]`).forEach(input => {
      input.addEventListener("change", () => {
        saveChecklistItem(fileKey, itemKey);
        updateNavStatus(fileKey);
      });
    });

    textarea.addEventListener("input", () => {
      saveChecklistItem(fileKey, itemKey);
    });
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
              const match = line.match(/^(.+?):\s*(.+?)\s*=\s*(Yes|No|N\/A)(?: \(Comment: (.+?)\))?(?: \(Link: (https?:\/\/.+?)\))?$/i);
              if (!match) continue;

              const fileKey = match[1]?.trim();
const itemKey = match[2]?.trim();
const status = match[3];
const comment = match[4] || "";
const link = match[5] || "";

if (!fileKey || !itemKey || !status) continue;
if (!data[fileKey]) data[fileKey] = {};
data[fileKey][itemKey] = {
  status,
  comment,
  ...(link && { link })
};
            }
          }

          localStorage.setItem("checklist", JSON.stringify(data));
buildNavTree();

// 🔄 Wait a moment for DOM to be built before updating icons
setTimeout(() => {
  flatFileList.forEach(fileKey => updateNavStatus(fileKey));
}, 50);

        } catch (err) {
          alert("Failed to import checklist. Ensure it's valid JSON or exported TXT format.");
          console.error(err);
        }
      };
      reader.readAsText(file);
    });
  }
});
