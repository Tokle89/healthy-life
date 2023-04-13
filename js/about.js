import { toggleMenu } from "./functions/toggle-menu.js";
import { fetchDetailedPost } from "./api/fetch-posts.js";
import { renderAboutPost } from "./render-posts/render-posts.js";
toggleMenu();
fetchDetailedPost(82).then((post) => renderAboutPost(post));
