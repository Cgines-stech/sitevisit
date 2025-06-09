/*data.js*/
const folders = {
  /*
  "Conditions": [
    "0.A.1 Worksheet A.1.docx.pdf",
    "0.A.2.docx.pdf",
    "0.A.3.docx.pdf"
  ],
  */
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
  /*
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
  */
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
  
  "Standard5": [
  "5.A.1.docx.pdf",
  "5.A.2.docx.pdf",
  "5.A.3.docx.pdf",
  "5.A.4.docx.pdf",
  "5.A.5.docx.pdf",
  "5.A.6.docx.pdf",
  "5.A.7.docx.pdf",
  "5.A.8.docx.pdf",
  "5.B.1.docx.pdf",
  "5.B.2.docx.pdf",
  "5.B.3.docx.pdf",
  "5.B.4.docx.pdf",
  "5.B.5.docx.pdf"
  ],

  "Standard7": [
  "7.1.docx.pdf",
  "7.2.docx.pdf",
  "7.3.docx.pdf",
  "7.4.docx.pdf",
  "7.5.docx.pdf",
  "7.6.docx.pdf",
  "7.7.docx.pdf",
  "7.8 (Not Applicable).docx.pdf",
  "7.9 (Not Applicable).docx.pdf",
  "7.10.docx.pdf",
  "7.11.docx.pdf",
  "7.12 (Not Applicable).docx.pdf",
  "7.13 (Not Applicable).docx.pdf",
  "7.14.docx.pdf",
  "7.15.docx.pdf",
  "7.16 (Not Applicable).docx.pdf",
  "7.17 (Not Applicable).docx.pdf",
  "7.18 (Not Applicable).docx.pdf",
  "7.19.docx.pdf",
  "7.20.docx.pdf",
  "7.21.docx.pdf",
  "7.22.docx.pdf",
  "7.23.docx.pdf",
  "7.24 Item.docx.pdf",
  "7.24 Worksheet 1.A.docx.pdf"
  ],

  "Standard8": [
  "8.A.1.docx.pdf",
  "8.A.2.docx.pdf",
  "8.A.3.docx.pdf",
  "8.A.4.docx.pdf",
  "8.B.1.docx.pdf",
  "8.B.2.docx.pdf",
  "8.B.3.docx.pdf",
  "8.B.4.docx.pdf",
  "8.B.5 (Not Applicable).docx.pdf",
  "8.B.6 (Not Applicable).docx.pdf",
  "8.B.7.docx.pdf",
  "8.B.8.docx.pdf",
  "8.B.9.docx.pdf",
  "8.B.10.docx.pdf",
  "8.C.1.docx.pdf",
  "8.C.2.docx.pdf",
  "8.D.1.docx.pdf",
  "8.D.2.docx.pdf",
  "8.D.3.docx.pdf",
  "8.E.1.docx.pdf",
  "8.E.2.docx.pdf"
  ],

  "Standard9": [
  "9.1.docx.pdf",
  "9.2 (Not Applicable).docx.pdf",
  "9.3.docx.pdf",
  "9.4.docx.pdf",
  "9.5.docx.pdf"
  ]/*,
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
  */
};

const associatedDocs = {
  //Standard1
  "Standard1/1.1.docx.pdf": ["SupportFiles/Standard1/SelfStudy2025_21.pdf", "SupportFiles/Standard1/Standard1.pdf"],
  "Standard1/1.2.docx.pdf": ["SupportFiles/Standard1/SelfStudy2025_21.pdf", "SupportFiles/Standard1/Standard1.pdf"],
  "Standard1/1.3.docx.pdf": ["SupportFiles/Standard1/SelfStudy2025_21.pdf", "SupportFiles/Standard1/Standard1.pdf"],
  "Standard1/1.4.docx.pdf": ["SupportFiles/Standard1/SelfStudy2025_22.pdf", "SupportFiles/Standard1/Standard1.pdf"],
  "Standard1/1.5.docx.pdf": ["SupportFiles/Standard1/SelfStudy2025_22.pdf", "SupportFiles/Standard1/Standard1.pdf"],
  "Standard1/1.6.docx.pdf": ["SupportFiles/Standard1/SelfStudy2025_22.pdf", "SupportFiles/Standard1/Standard1.pdf"],
  "Standard1/1.7.docx.pdf": ["SupportFiles/Standard1/SelfStudy2025_22.pdf", "SupportFiles/Standard1/Standard1.pdf"],
  "Standard1/1.8.docx.pdf": ["SupportFiles/Standard1/SelfStudy2025_22.pdf", "SupportFiles/Standard1/SelfStudy2025_23.pdf", "SupportFiles/Standard1/Standard1.pdf"],
  "Standard1/1.9.docx.pdf": ["SupportFiles/Standard1/SelfStudy2025_23.pdf", "SupportFiles/Standard1/Standard1.pdf"],
  "Standard1/1.10.docx.pdf": ["SupportFiles/Standard1/SelfStudy2025_23.pdf", "SupportFiles/Standard1/Standard1.pdf"],
  "Standard1/1.11.docx.pdf": ["SupportFiles/Standard1/SelfStudy2025_23.pdf", "SupportFiles/Standard1/Standard1.pdf"],

  //Standard4
  "Standard4/4.1.docx.pdf": ["SupportFiles/Standard4/SelfStudy2025_273.pdf"],
  "Standard4/4.2.docx.pdf": ["SupportFiles/Standard4/SelfStudy2025_273.pdf", "SupportFiles/Standard4/SelfStudy2025_274.pdf"],
  "Standard4/4.3.docx.pdf": ["SupportFiles/Standard4/SelfStudy2025_274.pdf"],
  "Standard4/4.4.docx.pdf": ["SupportFiles/Standard4/SelfStudy2025_274.pdf"],
  "Standard4/4.5.docx.pdf": ["SupportFiles/Standard4/SelfStudy2025_274.pdf"],
  "Standard4/4.6.docx.pdf": ["SupportFiles/Standard4/SelfStudy2025_274.pdf"],
  "Standard4/4.7.docx.pdf": ["SupportFiles/Standard4/SelfStudy2025_274.pdf", "SupportFiles/Standard4/SelfStudy2025_275.pdf"],
  "Standard4/4.8.docx.pdf": ["SupportFiles/Standard4/SelfStudy2025_275.pdf"],

  //Standard5
  "Standard5/5.A.1.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part276.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.A.2.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part276.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.A.3.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part276_277.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.A.4.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part277.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.A.5.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part277.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.A.6.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part277.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.A.7.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part277_278.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.A.8.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part278.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.B.1.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part278.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.B.2.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part278.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.B.3.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part278_279.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.B.4.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part279.pdf", "SupportFiles/Standard5/Standard5.pdf"],
  "Standard5/5.B.5.docx.pdf": ["SupportFiles/Standard5/SelfStudy2025_Part279.pdf", "SupportFiles/Standard5/Standard5.pdf"],

  //Standard7
  "Standard7/7.1.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.2.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.3.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.4.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.5.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.6.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.7.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.8.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.9.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.10.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.11.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.12.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.13.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.14.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.15.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.16.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.17.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.18.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.19.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.20.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.21.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.22.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.23.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.24 Item.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],
  "Standard7/7.24 Worksheet 1.A.docx.pdf": ["SupportFiles/Standard7/Standard7.pdf"],

  // Standard8
  "Standard8/8.A.1.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.A.2.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.A.3.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.A.4.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.B.1.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.B.2.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.B.3.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.B.4.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.B.5.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.B.6.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.B.7.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.B.8.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.B.9.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.B.10.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.C.1.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.C.2.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.D.1.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.D.2.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.D.3.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.E.1.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],
  "Standard8/8.E.2.docx.pdf": ["SupportFiles/Standard8/Standard8.pdf"],

  //Standard9
  "Standard9/9.1.docx.pdf": ["SupportFiles/Standard9/SelfStudy2025_310.pdf"],
  "Standard9/9.2 (Not Applicable).docx.pdf": ["SupportFiles/Standard9/SelfStudy2025_310.pdf"],
  "Standard9/9.3.docx.pdf": ["SupportFiles/Standard9/SelfStudy2025_310.pdf", "SupportFiles/Standard9/SelfStudy2025_311.pdf"],
  "Standard9/9.4.docx.pdf": ["SupportFiles/Standard9/SelfStudy2025_311.pdf"],
  "Standard9/9.5.docx.pdf": ["SupportFiles/Standard9/SelfStudy2025_311.pdf"]/*,

  //Standard10
  "Standard10/10.A.1.docx.pdf": "",
  "Standard10/10.A.2.docx.pdf": "",
  "Standard10/10.A.3.docx.pdf": "",
  "Standard10/10.A.4.docx.pdf": "",
  "Standard10/10.A.5.docx.pdf": "",
  "Standard10/10.A.6.docx.pdf": "",
  "Standard10/10.A.7.docx.pdf": "",
  "Standard10/10.A.8.docx.pdf": "",
  "Standard10/10.A.9.docx.pdf": "",
  "Standard10/10.A.10.docx.pdf": "",
  "Standard10/10.A.11.A.docx.pdf": "",
  "Standard10/10.A.11.B.docx.pdf": "",
  "Standard10/10.A.11.C.docx.pdf": "",
  "Standard10/10.A.11.D.docx.pdf": "",
  "Standard10/10.A.12.docx.pdf": "",
  "Standard10/10.A.13.docx.pdf": "",
  "Standard10/10.A.14.docx.pdf": "",
  "Standard10/10.A.15.docx.pdf": "",
  "Standard10/10.B.1.docx.pdf": "",
  "Standard10/10.B.2.docx.pdf": "",
  "Standard10/10.B.3.docx.pdf": "",
  "Standard10/10.B.4.Item.docx.pdf": "",
  "Standard10/10.B.4.docx.pdf": "",
  "Standard10/10.C.1.docx.pdf": "",
  "Standard10/10.C.2.docx.pdf": "",
  "Standard10/10.C.3.docx.pdf": "",
  "Standard10/10.C.4.docx.pdf": "",
  "Standard10/10.C.5.docx.pdf": "",
  "Standard10/10.D.1.docx.pdf": "",
  "Standard10/10.D.2.docx.pdf": "",
  "Standard10/10.D.3.docx.pdf": "",
  "Standard10/10.D.4.docx.pdf": "",
  "Standard10/10.D.5.docx.pdf": "",
  "Standard10/10.D.6.docx.pdf": "",
  "Standard10/10.D.7.docx.pdf": "",
  "Standard10/10.D.8.docx.pdf": "",
  "Standard10/10.D.9.docx.pdf": "",
  "Standard10/10.E.1.docx.pdf": "",
  "Standard10/10.E.2.docx.pdf": "",
  "Standard10/10.E.3.docx.pdf": "",
  "Standard10/10.E.4.docx.pdf": "",
  "Standard10/10.E.5.docx.pdf": ""
  */
};

const associatedDocNames = {
  // Standard 1 Associated File Names
  "Standard1/1.1.docx.pdf": ["1.1 — Self Study", "Standard 1 — Self Study"],
  "Standard1/1.2.docx.pdf": ["1.2 — Self Study", "Standard 1 — Self Study"],
  "Standard1/1.3.docx.pdf": ["1.3 — Self Study", "Standard 1 — Self Study"],
  "Standard1/1.4.docx.pdf": ["1.4 — Self Study", "Standard 1 — Self Study"],
  "Standard1/1.5.docx.pdf": ["1.5 — Self Study", "Standard 1 — Self Study"],
  "Standard1/1.6.docx.pdf": ["1.6 — Self Study", "Standard 1 — Self Study"],
  "Standard1/1.7.docx.pdf": ["1.7 — Self Study", "Standard 1 — Self Study"],
  "Standard1/1.8.docx.pdf": ["1.8 — Self Study p.1", "1.8 — Self Study p.2", "Standard 1 — Self Study"],
  "Standard1/1.9.docx.pdf": ["1.9 — Self Study", "Standard 1 — Self Study"],
  "Standard1/1.10.docx.pdf": ["1.10 — Self Study", "Standard 1 — Self Study"],
  "Standard1/1.11.docx.pdf": ["1.11 — Self Study", "Standard 1 — Self Study"]

  // default will be used if not listed here
};

window.associatedDocs = associatedDocs;
window.associatedDocNames = associatedDocNames;

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
