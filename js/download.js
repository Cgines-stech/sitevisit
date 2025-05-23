/*download.js*/
export function downloadChecklist() {
  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");
  const lines = [];

  Object.entries(folders).forEach(([folderName, files]) => {
    files.forEach(file => {
      const fileKey = `${folderName}/${file}`;
      const itemData = allData[fileKey] || {};

      checklistItems.forEach(item => {
        const entry = itemData[item];
        if (entry?.status?.trim()) {
          const status = entry.status;
          const comment = entry.comment ? ` (Comment: ${entry.comment})` : "";
          lines.push(`${fileKey}: ${item} = ${status}${comment}`);
        }
      });
    });
  });

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "checklist-backup.txt";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
