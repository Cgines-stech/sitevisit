/*download.js*/
export function downloadChecklist() {
  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");
  const lines = [];

  // ✅ Get user ID first
  const userId = document.getElementById("userIdInput")?.value?.trim() || "unknown";
  lines.push(`User ID: ${userId}`);

  // ✅ Populate checklist data
  Object.entries(folders).forEach(([folderName, files]) => {
    files.forEach(file => {
      const fileKey = `${folderName}/${file}`;
      const itemData = allData[fileKey] || {};

      checklistItems.forEach(item => {
        const entry = itemData[item];
        if (entry?.status?.trim() || entry?.link || entry?.docLink) {
          const status = entry.status;
          const comment = entry.comment ? ` (Comment: ${entry.comment})` : "";
          const link = entry.link ? ` (Link: ${entry.link})` : "";
          const doc = entry.docLink ? ` (Doc: ${entry.docLink})` : "";

          lines.push(`${fileKey}: ${item} = ${status}${comment}${link}${doc}`);
        }
      });
    });
  });

  // ✅ Now create Blob with the final lines array
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  // ✅ Trigger download
  const a = document.createElement("a");
  a.href = url;
  a.download = `${userId}_backup.txt`;
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
