/*viewer.js*/
function setFile(pdfPath, keyForChecklist) {
  // First, determine the index of the file to save before changing it
  const previousFileIndex = currentFileIndex;
  const previousFileKey = flatFileList[previousFileIndex];

  // Save checklist using the old file key
  const selectedStatus = checklistContainer.querySelector('input[name="status"]:checked')?.value || "";
  const comment = checklistContainer.querySelector('textarea[name="comment"]')?.value || "";
  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");

  if (previousFileKey) {
    const itemKey = checklistItems[currentItem];
    if (!allData[previousFileKey]) allData[previousFileKey] = {};
    allData[previousFileKey][itemKey] = { status: selectedStatus, comment };
    localStorage.setItem("checklist", JSON.stringify(allData));
  }

  // Then update the index and load the new checklist
  currentFileIndex = flatFileList.indexOf(keyForChecklist);
  currentItem = 0;

  viewerEl.src = `${pdfPath}?t=${Date.now()}`;
  checklistContainer.innerHTML = ""; // clear out UI
  loadChecklist();
  highlightCurrentFile(keyForChecklist); // optional
}
