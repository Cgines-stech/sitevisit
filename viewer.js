/*viewer.js*/
function setFile(pdfPath, keyForChecklist) {
  if (activeTab === 'tab1') {
    // Save current checklist state before switching (as before)

    currentFileIndex = flatFileList.indexOf(keyForChecklist);
    currentItem = 0;
    checklistContainer.innerHTML = "";
    loadChecklist();
    highlightCurrentFile(keyForChecklist);

    // 🔁 Auto-load supplemental file to Tab 2
    const supplementKey = supplementalPDFs[keyForChecklist];
    if (supplementKey) {
      const supportPath = `https://cgines-stech.github.io/sitevisit/pdf/${supplementKey}`;
      pdfSlots.tab2 = { pdfPath: supportPath, keyForChecklist: supplementKey };

      if (activeTab === 'tab2') {
        viewerEl.src = `${supportPath}?t=${Date.now()}`;
        checklistContainer.innerHTML = "<div style='text-align:center;'>Checklist is hidden while viewing a reference PDF.</div>";
      }
    } else {
      pdfSlots.tab2 = null; // Clear it
    }
  }

  // Load primary viewer
  pdfSlots[activeTab] = { pdfPath, keyForChecklist };
  viewerEl.src = `${pdfPath}?t=${Date.now()}`;
}

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
