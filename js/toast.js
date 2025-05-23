/*toast.js*/
export function showToast(message) {
  const msg = document.createElement("div");
  msg.textContent = message;
  msg.className = "publish-toast show"; // use show class to trigger transition
  document.body.appendChild(msg);

  setTimeout(() => {
    msg.classList.remove("show"); // start fade out
    setTimeout(() => msg.remove(), 500); // wait for animation to finish
  }, 4000);
}
showToast("Something went wrong!", "error");