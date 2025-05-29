/*viewer.js*/
function setFile(pdfPath, keyForChecklist) {
  // Save current checklist before switching
  saveChecklistItem();

  currentFileIndex = flatFileList.indexOf(keyForChecklist);
  currentItem = 0;
  currentTab = "main";
  checklistContainer.innerHTML = "";
  highlightCurrentFile(keyForChecklist);

  // Save current file info globally
  window.currentChecklistKey = keyForChecklist;
  window.currentPdfPath = pdfPath;
  window.supplementalPdfPath = pdfPath.replace(/\.pdf$/, '_supplemental.pdf'); // customize if naming varies

  updatePDFView();
  loadChecklist();
}

function updatePDFView() {
  if (currentTab === "main") {
    viewerEl.src = `${currentPdfPath}?t=${Date.now()}`;
    checklistContainer.style.display = "block";
  } else {
    viewerEl.src = `${supplementalPdfPath}?t=${Date.now()}`;
    checklistContainer.style.display = "none";
  }

  document.getElementById("mainTab").classList.toggle("active-tab", currentTab === "main");
  document.getElementById("suppTab").classList.toggle("active-tab", currentTab === "supplemental");
}

document.getElementById("mainTab").addEventListener("click", () => {
  currentTab = "main";
  updatePDFView();
});

document.getElementById("suppTab").addEventListener("click", () => {
  currentTab = "supplemental";
  updatePDFView();
});

function prevFile() {
  if (currentFileIndex > 0) {
    const prevKey = flatFileList[currentFileIndex - 1];
    const fullURL = buildPDFUrl(prevKey);
    setFile(fullURL, prevKey);
  }
}

function nextFile() {
  if (currentFileIndex < flatFileList.length - 1) {
    const nextKey = flatFileList[currentFileIndex + 1];
    const fullURL = buildPDFUrl(nextKey);
    setFile(fullURL, nextKey);
  }
}

function buildPDFUrl(fileKey) {
  return `https://cgines-stech.github.io/sitevisit/pdf/${fileKey}`;
}

// Optional: attach to window if needed elsewhere
window.prevFile = prevFile;
window.nextFile = nextFile;
window.setFile = setFile;
