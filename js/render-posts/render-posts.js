import { parsePost } from "./parse-posts.js";
import { createCommentMsg, createElement } from "./create-element.js";
import { createImgContainer } from "./create-element.js";
import { createTextContainer } from "./create-element.js";
import { createCard } from "./create-element.js";
import { createCircleButton } from "./create-element.js";
import { createPosts } from "./create-element.js";
import { viewMorePosts } from "../functions/view-more.js";
import { createDetailedPost } from "./create-element.js";
import { createHeading } from "./create-element.js";
import { slider } from "../functions/postsSlider.js";
import { createComment } from "./create-element.js";

const introContainer = document.querySelector(".intro-container");
const latestPosts = document.querySelector(".latest-posts");
const cardsContainer = document.querySelector(".cards-container");
const postsContainer = document.querySelector(".blog-posts_container");
const detailedPostContainer = document.querySelector(".detailed-post_container");
const commentContainer = document.querySelector(".view-comments");

export function renderIntroPost(post) {
  const parsedPost = parsePost(post);
  const textContainer = createTextContainer(parsedPost, post, "h1");
  const imgContainer = createImgContainer(parsedPost, "intro-img_container");

  introContainer.append(imgContainer, textContainer);
}

export function renderCardPosts(posts) {
  posts.forEach(renderCardPost);

  const heading = createElement("h2", undefined, undefined, "View our latest post`s:");

  const leftBtn = createCircleButton("left");
  leftBtn.addEventListener("click", () => {
    slider("left");
  });

  const rightBtn = createCircleButton("right");
  rightBtn.addEventListener("click", () => {
    slider("right");
  });

  const viewBtn = createElement("button", ["btn", "latest-posts_btn"], undefined, "View More");
  viewBtn.addEventListener("click", () => {
    cardsContainer.style.maxHeight = "none";
    viewBtn.style.display = "none";
  });

  latestPosts.append(heading, rightBtn, leftBtn, viewBtn);
}

function renderCardPost(post) {
  if (post.id !== 82) {
    const parsedPost = parsePost(post);
    const card = createCard(parsedPost, post);
    cardsContainer.append(card);
  }
}

export function renderPosts(posts) {
  createPosts(posts);
  const button = createElement("button", ["btn"], undefined, "View More");
  button.addEventListener("click", viewMorePosts);
  postsContainer.append(button);
}

export function renderPost(post) {
  const parsedPost = parsePost(post);
  const heading = createHeading(post);
  const detailedPost = createDetailedPost(parsedPost);

  detailedPostContainer.append(heading, detailedPost);
}

export function renderAboutPost(post) {
  const parsedPost = parsePost(post);
  const heading = createHeading(post);

  const p = heading.querySelector("P");
  p.remove();
  const detailedPost = createDetailedPost(parsedPost);

  detailedPostContainer.append(heading, detailedPost);
}

export function renderComments(comments) {
  if (comments.length > 0) {
    comments.forEach(renderComment);
  } else {
    const msg = createCommentMsg();
    commentContainer.append(msg);
  }
}

function renderComment(data) {
  const comment = createComment(data);
  commentContainer.append(comment);
}
