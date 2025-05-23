/*data.js*/
const folders = {
  "Standard1": [
    "1.1.docx.pdf",
    "1.2.docx.pdf"
  ],
  "Standard2/Advanced Emergency Medical Technician": [
    "2.A.1.pdf",
    "2.A.2.pdf"
  ]
};

const checklistItems = ["Item 1", "Item 2", "Item 3"];

let flatFileList = [];
let currentFileIndex = 0;
let currentItem = 0;

const viewerEl = document.getElementById("pdfViewer");
const folderListEl = document.getElementById("folderList");
const checklistContainer = document.getElementById("checklistContainer");

// Expose to global scope so modules can access them
window.folders = folders;
window.checklistItems = checklistItems;
window.flatFileList = flatFileList;
window.currentFileIndex = currentFileIndex;
window.currentItem = currentItem;

window.viewerEl = viewerEl;
window.folderListEl = folderListEl;
window.checklistContainer = checklistContainer;
