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
      const match = line.match(/^(.+?):\s*(.+?)\s*=\s*(Yes|No|N\/A)(?: \(Comment: (.+?)\))?(?: \(Link: (https?:\/\/.+?)\))?$/i);
      if (!match) return;

      const fileKey = match[1]?.trim();
      const itemKey = match[2]?.trim();
      const status = match[3];
      const comment = match[4] || "";
      const link = match[5] || "";

      if (!fileKey || !itemKey || !status) return;
      if (!newData[fileKey]) newData[fileKey] = {};
      newData[fileKey][itemKey] = {
        status,
        comment,
        ...(link && { link })
      };
    });

    localStorage.setItem("checklist", JSON.stringify(newData));

    // Rebuild nav tree and refresh icons
    buildNavTree();
    setTimeout(() => {
      flatFileList.forEach(fileKey => updateNavStatus(fileKey));
    }, 50);

    alert("Checklist imported successfully!");
  };

  reader.readAsText(file);
}
