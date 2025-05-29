/*data.js*/
const folders = {
  "Conditions": [
    "0.A.1 Worksheet A.1.docx.pdf",
    "0.A.2.docx.pdf",
    "0.A.3.docx.pdf"
  ],
  "Standard1": [
    "1.1.docx.pdf",
    "1.2.docx.pdf",
    "1.3.docx.pdf",
    "1.4.docx.pdf",
    "1.5.docx.pdf",
    "1.6.docx.pdf",
    "1.7.docx.pdf",
    "1.8.docx.pdf",
    "1.9.docx.pdf",
    "1.10.docx.pdf",
    "1.11.docx.pdf"
  ],
  "Standard2/Advanced Emergency Medical Technician": [
  "2.A.1.docx.pdf",
  "2.A.2.docx.pdf",
  "2.A.3.docx.pdf"
  ],
  "Standard2/Automation Technology": [
  "2.A.1.docx.pdf",
  "2.A.2.docx.pdf",
  "2.A.3.docx.pdf"
  ],
  "Standard4": [
  "4.1.docx.pdf",
  "4.2.docx.pdf",
  "4.3.docx.pdf",
  "4.4.docx.pdf",
  "4.5.docx.pdf",
  "4.6.docx.pdf",
  "4.7.docx.pdf",
  "4.8.docx.pdf"
  ],
  "Standard10": [
  "10.A.1.docx.pdf",
  "10.A.2.docx.pdf",
  "10.A.3.docx.pdf",
  "10.A.4.docx.pdf",
  "10.A.5.docx.pdf",
  "10.A.6.docx.pdf",
  "10.A.7.docx.pdf",
  "10.A.8.docx.pdf",
  "10.A.9.docx.pdf",
  "10.A.10.docx.pdf",
  "10.A.11.A.docx.pdf",
  "10.A.11.B.docx.pdf",
  "10.A.11.C.docx.pdf",
  "10.A.11.D.docx.pdf",
  "10.A.12.docx.pdf",
  "10.A.13.docx.pdf",
  "10.A.14.docx.pdf",
  "10.A.15.docx.pdf",
  "10.B.1.docx.pdf",
  "10.B.2.docx.pdf",
  "10.B.3.docx.pdf",
  "10.B.4.Item.docx.pdf",
  "10.B.4.docx.pdf",
  "10.C.1.docx.pdf",
  "10.C.2.docx.pdf",
  "10.C.3.docx.pdf",
  "10.C.4.docx.pdf",
  "10.C.5.docx.pdf",
  "10.D.1.docx.pdf",
  "10.D.2.docx.pdf",
  "10.D.3.docx.pdf",
  "10.D.4.docx.pdf",
  "10.D.5.docx.pdf",
  "10.D.6.docx.pdf",
  "10.D.7.docx.pdf",
  "10.D.8.docx.pdf",
  "10.D.9.docx.pdf",
  "10.E.1.docx.pdf",
  "10.E.2.docx.pdf",
  "10.E.3.docx.pdf",
  "10.E.4.docx.pdf",
  "10.E.5.docx.pdf"
  ]
};

const associatedDocs = {
  "Standard1/1.1.docx.pdf": "SupportFiles/Standard1/SelfStudy2025_21.pdf",
  "Standard1/1.2.docx.pdf": "SupportFiles/Standard1/SelfStudy2025_21.pdf",
  "Standard1/1.3.docx.pdf": "SupportFiles/Standard1/SelfStudy2025_21.pdf",
  "Standard1/1.4.docx.pdf": "SupportFiles/Standard1/SelfStudy2025_22.pdf",
  "Standard1/1.5.docx.pdf": "SupportFiles/Standard1/SelfStudy2025_22.pdf",
  "Standard1/1.6.docx.pdf": "SupportFiles/Standard1/SelfStudy2025_22.pdf",
  "Standard1/1.7.docx.pdf": "SupportFiles/Standard1/SelfStudy2025_22.pdf",
  "Standard1/1.8.docx.pdf": "SupportFiles/Standard1/SelfStudy2025_22.pdf",
  "Standard1/1.9.docx.pdf": "SupportFiles/Standard1/SelfStudy2025_23.pdf",
  "Standard1/1.10.docx.pdf": "SupportFiles/Standard1/SelfStudy2025_23.pdf",
  "Standard1/1.11.docx.pdf": "SupportFiles/Standard1/SelfStudy2025_23.pdf"
};
window.associatedDocs = associatedDocs;

const checklistItems = [
  "Item 1",
  "Item 2",
  "2.A.1",
  "2.A.2"
];

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
