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
const extraBtnContainer = document.getElementById("extraDocBtnContainer");
extraBtnContainer.innerHTML = ""; // Clear previous buttons
extraBtnContainer.style.display = "none";

const returnBtn = document.getElementById("returnBtn");
let originalURL = pdfPath;

const extras = associatedDocs[keyForChecklist];
if (Array.isArray(extras) && extras.length > 0) {
  extraBtnContainer.style.display = "block";

  extras.forEach((url, i) => {
  let resolvedUrl = url.startsWith("http")
    ? url
    : `https://cgines-stech.github.io/sitevisit/pdf/${url}`;

  const customNames = associatedDocNames[keyForChecklist] || [];
  const name = customNames[i] || `📎 Self Study Reference ${i + 1}`;

  const btn = document.createElement("button");
  btn.textContent = name;
  btn.className = "extra-pdf-button";
  btn.onclick = () => {
    viewerEl.src = `${resolvedUrl}?t=${Date.now()}`;
    returnBtn.style.display = "inline-block";
    extraBtnContainer.style.display = "none";
  };
  extraBtnContainer.appendChild(btn);
});

  // Show return button when any extra is opened
  returnBtn.onclick = () => {
    viewerEl.src = `${originalURL}?t=${Date.now()}`;
    extraBtnContainer.style.display = "block";
    returnBtn.style.display = "none";
  };

} else {
  extraBtnContainer.style.display = "none";
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
