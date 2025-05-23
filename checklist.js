/*checklist.js*/
function downloadChecklist() {
  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");
  let lines = [];

  Object.entries(folders).forEach(([folderName, files]) => {
    files.forEach(file => {
      const fileKey = `${folderName}/${file}`;
      const items = allData[fileKey] || {};

      let firstAnsweredItem = null;
      let firstStatus = "";
      let firstComment = "";

      for (let item of checklistItems) {
        if (items[item]?.status) {
          firstAnsweredItem = item;
          firstStatus = items[item].status;
          firstComment = items[item].comment || "";
          break; // Exit on first answered item
        }
      }

      const value = firstStatus
        ? (firstComment ? `${firstStatus} (Comment: ${firstComment})` : firstStatus)
        : "";

      lines.push(`${fileKey}: ${value}`);
    });
  });

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "checklist-backup.txt";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


function saveChecklistItem() {
  const fileKey = flatFileList[currentFileIndex];
  const itemKey = checklistItems[currentItem];
  const selectedStatus = checklistContainer.querySelector('input[name="status"]:checked')?.value || "";
  const comment = checklistContainer.querySelector('textarea[name="comment"]')?.value || "";
  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");

  if (!allData[fileKey]) allData[fileKey] = {};
  allData[fileKey][itemKey] = { status: selectedStatus, comment };

  localStorage.setItem("checklist", JSON.stringify(allData));
}

function loadChecklist() {
  // Clear all previous UI
  checklistContainer.innerHTML = "";

  const fileKey = flatFileList[currentFileIndex];
  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");
  const itemKey = checklistItems[currentItem];
  const itemData = allData[fileKey]?.[itemKey] || {};

  // Add label
  const label = document.createElement("h4");
  label.textContent = itemKey;
  checklistContainer.appendChild(label);

  // Radio buttons
  ["Yes", "No", "N/A"].forEach(opt => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="status" value="${opt}" ${
        itemData.status === opt ? "checked" : ""
      }> ${opt}
    `;
    checklistContainer.appendChild(label);
  });

  // Textarea
  const textarea = document.createElement("textarea");
  textarea.name = "comment";
  textarea.placeholder = "Enter comment here...";
  textarea.value = itemData.comment || "";
  checklistContainer.appendChild(textarea);

  // Attach save handlers
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
