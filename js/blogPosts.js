import { fetchDetailedPost } from "./api/fetch-posts.js";
import { fetchPosts } from "./api/fetch-posts.js";
import { renderIntroPost } from "./render-posts/render-posts.js";
import { renderPosts } from "./render-posts/render-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";

toggleMenu();

fetchDetailedPost(38).then((post) => renderIntroPost(post));
fetchPosts().then((posts) => renderPosts(posts));

const introContainer = document.querySelector(".intro-container");
introContainer.classList.add("blog-posts_intro-container");
