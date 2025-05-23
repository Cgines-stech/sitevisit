/*download.js*/
export function downloadChecklist() {
  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");
  const lines = [];

  Object.entries(folders).forEach(([folderName, files]) => {
    files.forEach(file => {
      const fileKey = `${folderName}/${file}`;
      const itemData = allData[fileKey] || {};

      const responses = checklistItems.map(item => {
        const entry = itemData[item];
        if (!entry || !entry.status) return null;

        return entry.comment
          ? `${entry.status} (Comment: ${entry.comment})`
          : entry.status;
      }).filter(Boolean); // remove nulls

      // Only export if there are responses
      if (responses.length > 0) {
        lines.push(`${fileKey}: ${responses.join(", ")}`);
      } else {
        lines.push(`${fileKey}:`);
      }
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
