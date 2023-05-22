import { parsePost } from "./parse.js";
import {
  createCommentMsg,
  createElement,
  createImgContainer,
  createTextContainer,
  createCard,
  createCircleButton,
  createPosts,
  createDetailedPost,
  createComment,
} from "./create-element.js";
import { viewMorePosts } from "../functions/view-more.js";
import { slider } from "../functions/posts-slider.js";

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

  latestPosts.append(rightBtn, leftBtn, viewBtn);
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

export function renderDetailedPost(post) {
  const parsedPost = parsePost(post);
  const detailedPost = createDetailedPost(parsedPost, post);
  detailedPostContainer.append(detailedPost);
}

export function renderAboutPost(post) {
  const parsedPost = parsePost(post);
  const detailedPost = createDetailedPost(parsedPost, post);
  const date = detailedPost.querySelector(".date");
  date.remove();

  detailedPostContainer.append(detailedPost);
}

export function renderComments(comments) {
  console.log(comments);
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
