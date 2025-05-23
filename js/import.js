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
      const match = line.match(/^(.+?):\s*(.+?)\s*=\s*(Yes|No|N\/A)(?: \(Comment: (.+?)\))?$/i);
      if (!match) return;

      const fileKey = match[1]?.trim();
      const itemKey = match[2]?.trim();
      const status = match[3];
      const comment = match[4] || "";

      if (!fileKey || !itemKey || !status) return;
      if (!newData[fileKey]) newData[fileKey] = {};
      newData[fileKey][itemKey] = { status, comment };
    });

    localStorage.setItem("checklist", JSON.stringify(newData));

    // Refresh UI
    buildNavTree();
    flatFileList.forEach(fileKey => updateNavStatus(fileKey));
    loadChecklist();

    alert("Checklist imported successfully.");
  };

  reader.readAsText(file);
}
