const msg = document.querySelector(".msg");

export function msgReceived() {
  msg.style.display = "block";
  closeMsg();
}

function closeMsg() {
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.onclick = () => {
    msg.style.display = "none";
  };
}
