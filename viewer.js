/*viewer.js*/
function setFile(pdfPath, keyForChecklist) {
  saveChecklistItem();
  currentFileIndex = flatFileList.indexOf(keyForChecklist);
  currentItem = 0;
  viewerEl.src = `${pdfPath}?t=${Date.now()}`; // force reload
  checklistContainer.innerHTML = ""; // safeguard clear
  loadChecklist();
}

function prevFile() {
  if (currentFileIndex > 0) {
    saveChecklistItem();
    currentFileIndex--;
    currentItem = 0;

    const key = flatFileList[currentFileIndex];
    const url = `https://cgines-stech.github.io/sitevisit/pdf/${key}`;
    setFile(url, key);
  }
}

function nextFile() {
  if (currentFileIndex < flatFileList.length - 1) {
    saveChecklistItem();
    currentFileIndex++;
    currentItem = 0;

    const key = flatFileList[currentFileIndex];
    const url = `https://cgines-stech.github.io/sitevisit/pdf/${key}`;
    setFile(url, key);
  }
}
