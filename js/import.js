/*import.js*/
export function importChecklist() {
  const fileInput = document.getElementById("importFile");
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const content = e.target.result;
    const lines = content.split("\n").filter(Boolean);
    const newData = {};

    lines.forEach(line => {
      const [fileKeyRaw, restRaw] = line.split(":");
      const fileKey = fileKeyRaw?.trim().replace(/^\.*\/+/, '').replace(/\/+$/, '');
      const rest = restRaw?.trim();
      if (!fileKey || !rest) return;

      const entries = rest.split(/,(?![^\(]*\))/).map(e => e.trim()).filter(Boolean);
      if (!entries.length) return;

      newData[fileKey] = {};

      entries.forEach((entry, i) => {
        const match = entry.match(/^(Yes|No|N\/A)(?: \(Comment: (.+?)\))?$/i);
        if (match && checklistItems[i]) {
          const status = match[1];
          const comment = match[2] || "";
          newData[fileKey][checklistItems[i]] = { status, comment };
        }
      });
    });

    // Replace checklist data in localStorage
    localStorage.setItem("checklist", JSON.stringify(newData));

    // Refresh UI
    buildNavTree();
    flatFileList.forEach(fileKey => updateNavStatus(fileKey));
    loadChecklist();

    alert("Checklist backup imported successfully.");
  };

  reader.readAsText(file);
}
