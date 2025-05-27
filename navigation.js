/* navigition.js */
function buildNavTree() {
  folderListEl.innerHTML = "";
  flatFileList = [];

  const folderMap = {};
  Object.entries(folders).forEach(([fullPath, files]) => {
    const parts = fullPath.split("/");
    const root = parts[0];
    const subpath = parts.slice(1).join("/");

    if (!folderMap[root]) folderMap[root] = [];
    folderMap[root].push({ subpath, files, fullPath });
  });

  Object.entries(folderMap).forEach(([rootFolder, subfolders]) => {
    const rootLi = document.createElement("li");

    const rootHeader = document.createElement("div");
    rootHeader.className = "folder-label";
    rootHeader.textContent = `📂 ${rootFolder}`;
    const rootUl = document.createElement("ul");
    rootUl.setAttribute("role", "group");

    if (rootFolder === "Standard2") {
      rootUl.style.display = "none";
    }

    rootHeader.onclick = () => {
      rootUl.style.display = rootUl.style.display === "none" ? "block" : "none";
    };

    subfolders.forEach(({ subpath, files, fullPath }) => {
      if (!subpath) {
        files.forEach(file => {
          const displayKey = `${fullPath}/${file}`;
          const fullURL = `https://cgines-stech.github.io/sitevisit/pdf/${fullPath}/${file}`;
          const displayName = file.replace(/\.docx\.pdf$/, '').replace(/\.pdf$/, '');

          flatFileList.push(displayKey);

          const fileLi = document.createElement("li");
          fileLi.className = "file-entry";
          fileLi.id = `nav-${displayKey}`;
          fileLi.setAttribute("role", "treeitem");
          fileLi.setAttribute("aria-label", displayName);

          fileLi.innerHTML = `📄 ${displayName} <span class="status-icon" style="margin-left: 6px;"></span>`;
          fileLi.onclick = () => {
            const cacheBustedUrl = `${fullURL}?t=${Date.now()}`;
            setFile(cacheBustedUrl, displayKey);
            highlightCurrentFile(displayKey);
          };

          rootUl.appendChild(fileLi);
          updateNavStatus(displayKey);  // ✅ moved below append
        });

        return;
      }

      const subLi = document.createElement("li");
      const subUl = document.createElement("ul");
      subUl.style.display = "none";
      subUl.setAttribute("role", "group");

      const subLabel = document.createElement("div");
      subLabel.className = "folder-label";
      subLabel.textContent = `📁 ${subpath}`;
      subLabel.onclick = () => {
        subUl.style.display = subUl.style.display === "none" ? "block" : "none";
      };
      subLi.appendChild(subLabel);

      files.forEach(file => {
        const displayKey = `${fullPath}/${file}`;
        const fullURL = `https://cgines-stech.github.io/sitevisit/pdf/${fullPath}/${file}`;
        const displayName = file.replace(/\.docx\.pdf$/, '').replace(/\.pdf$/, '');

        flatFileList.push(displayKey);

        const fileLi = document.createElement("li");
        fileLi.className = "file-entry";
        fileLi.id = `nav-${displayKey}`;
        fileLi.setAttribute("role", "treeitem");
        fileLi.setAttribute("aria-label", displayName);

        fileLi.innerHTML = `📄 ${displayName} <span class="status-icon" style="margin-left: 6px;"></span>`;
        fileLi.onclick = () => {
          const cacheBustedUrl = `${fullURL}?t=${Date.now()}`;
          setFile(cacheBustedUrl, displayKey);
          highlightCurrentFile(displayKey);
        };

        subUl.appendChild(fileLi);
        updateNavStatus(displayKey);  // ✅ moved below append
      });

      subLi.appendChild(subUl);
      rootUl.appendChild(subLi);
    });

    rootLi.appendChild(rootHeader);
    rootLi.appendChild(rootUl);
    folderListEl.appendChild(rootLi);
  });

  // ✅ Save the full file list once
  localStorage.setItem("flatFileList", JSON.stringify(flatFileList));
}

function updateNavStatus(fileKey) {
  const el = document.getElementById(`nav-${fileKey}`);
  if (!el) {
    console.warn(`Missing nav element for fileKey: ${fileKey}`);
    return;
  }

  const icon = el.querySelector(".status-icon");
  if (!icon) return;

  const allData = JSON.parse(localStorage.getItem("checklist") || "{}");
  const fileData = allData[fileKey] || {};

  const hasNo = checklistItems.some(item => fileData[item]?.status === "No");
  const hasYes = checklistItems.some(item => fileData[item]?.status === "Yes");
  const hasNA = checklistItems.some(item => fileData[item]?.status === "N/A");

  if (hasNo) {
    icon.textContent = "❌";
  } else if (hasYes || hasNA) {
    icon.textContent = "✔️";
  } else {
    icon.textContent = "";
  }
}

function highlightCurrentFile(selectedKey) {
  document.querySelectorAll(".file-entry").forEach(el => {
    el.classList.remove("active");
  });

  const selected = document.getElementById(`nav-${selectedKey}`);
  if (selected) selected.classList.add("active");
}

window.buildNavTree = buildNavTree;
window.updateNavStatus = updateNavStatus;
