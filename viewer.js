/*viewer.js*/
function setFile(pdfPath, keyForChecklist) {
  // Save current checklist before switching
  const previousFileKey = flatFileList[currentFileIndex];
  if (previousFileKey) {
  const selectedStatus = checklistContainer.querySelector('input[name="status"]:checked')?.value || "";
  const comment = checklistContainer.querySelector('textarea[name="comment"]')?.value || "";
  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");

  const itemKey = checklistItems[currentItem];
  if (!allData[previousFileKey]) allData[previousFileKey] = {};
  const existing = allData[previousFileKey][itemKey] || {};

  allData[previousFileKey][itemKey] = {
    status: selectedStatus,
    comment,
    ...(existing.link && { link: existing.link }),
    ...(existing.docLink && { docLink: existing.docLink })
  };

  localStorage.setItem("checklist", JSON.stringify(allData));
}

  // Switch to new file
  currentFileIndex = flatFileList.indexOf(keyForChecklist);
  currentItem = 0;

  viewerEl.src = `${pdfPath}?t=${Date.now()}`;
  checklistContainer.innerHTML = "";
  loadChecklist();
  highlightCurrentFile(keyForChecklist);
  
  // Show 'View Additional PDF' button if there's an associated doc
const extraBtn = document.getElementById("extraDocBtn");
const returnBtn = document.getElementById("returnBtn");

let originalURL = pdfPath;

if (associatedDocs[keyForChecklist]) {
  extraBtn.style.display = "inline-block";
  returnBtn.style.display = "none"; // Initially hide return

  extraBtn.onclick = () => {
    viewerEl.src = `${associatedDocs[keyForChecklist]}?t=${Date.now()}`;
    extraBtn.style.display = "none";
    returnBtn.style.display = "inline-block";
  };

  returnBtn.onclick = () => {
    viewerEl.src = `${originalURL}?t=${Date.now()}`;
    extraBtn.style.display = "inline-block";
    returnBtn.style.display = "none";
  };
} else {
  extraBtn.style.display = "none";
  returnBtn.style.display = "none";
}

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
