import { fetchDetailedPost } from "./api/fetch-posts.js";
import { fetchPosts } from "./api/fetch-posts.js";
import { renderPost } from "./render-posts/render-posts.js";
import { renderCardPosts } from "./render-posts/render-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";
import { validateForm } from "./functions/validateForm.js";
import { postComment } from "./api/comments.js";
import { fetchComments } from "./api/comments.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const form = document.querySelector("form");

toggleMenu();

// fetchDetailedPost(id).then((post) => renderPost(post));

fetchPosts()
  .then((posts) => renderCardPosts(posts))
  .catch((error) => console.error(error));

const displayPost = async () => {
  try {
    const post = await fetchDetailedPost(id);
    renderPost(post);
  } catch (error) {}
};

displayPost();

validateForm();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // msgReceived();

  const [name, email, comment] = event.target.elements;
  postComment(name, email, comment, id);
  form.reset();
  fetchComments(id);
});

fetchComments(id);
