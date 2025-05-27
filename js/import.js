/*import.js*/
export function importChecklist() {
  const fileInput = document.getElementById("importFile");
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const content = e.target.result;
    const lines = content.split("\n").filter(Boolean);

    // ✅ Extract and set User ID if available
    const userIdLine = lines.find(line => line.toLowerCase().startsWith("user id:"));
    if (userIdLine) {
      const [, idPart] = userIdLine.split(":");
      const userIdValue = idPart?.trim();
      if (userIdValue) {
        const userIdInput = document.getElementById("userIdInput");
        if (userIdInput) userIdInput.value = userIdValue;
      }
    }

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

    buildNavTree();
    setTimeout(() => {
      flatFileList.forEach(fileKey => updateNavStatus(fileKey));
    }, 50);

    alert("Checklist imported successfully!");
  };

  reader.readAsText(file);
}
