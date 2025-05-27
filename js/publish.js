/*publish.js*/
import { showToast } from "./toast.js";

export function publishChecklist() {
  const userId = document.getElementById("userIdInput")?.value?.trim();
  if (!userId) {
    alert("Please enter your User ID before publishing.");
    return;
  }

  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");
  const lines = [];

  Object.entries(folders).forEach(([folderName, files]) => {
    files.forEach(file => {
      const fileKey = `${folderName}/${file}`;
      const items = allData[fileKey] || {};

      let status = "";
      let comment = "";

      for (const item of checklistItems) {
        const entry = items[item];
        if (entry?.status?.trim()) {
          status = entry.status;
          comment = entry.comment || "";
          break; // Use the first answered item only
        }
      }

      let value = status;
if (comment) value += ` (Comment: ${comment})`;
if (entry?.link) value += ` (Link: ${entry.link})`;

      lines.push(`${fileKey}: ${value}`);
    });
  });

  const body = encodeURIComponent(
    `Hi,\n\nHere is my checklist backup.\n\nUser ID: ${userId}\n\n${lines.join("\n")}`
  );

  const mailto = `mailto:cgines@stech.org?subject=Checklist Backup from ${userId}&body=${body}`;
  window.location.href = mailto;

  showToast("📬 Email draft opened in your mail app.");
}
