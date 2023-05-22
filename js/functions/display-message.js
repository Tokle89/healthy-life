import { createErrorMsg, createCommentErrorMsg } from "../render-posts/create-element.js";
const msg = document.querySelector(".msg");
const main = document.querySelector("main");
const body = document.querySelector("body");
const commentSection = document.querySelector(".view-comments");

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

export const displayErrorMsg = () => {
  const errorMsg = createErrorMsg();
  body.append(errorMsg);
  main.style.opacity = "20%";
};

export const displayCommentErrorMsg = () => {
  const errorMsg = createCommentErrorMsg();
  commentSection.append(errorMsg);
};
