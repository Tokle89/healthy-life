import { fetchDetailedPost } from "./api/fetch-posts.js";
import { fetchPosts } from "./api/fetch-posts.js";
import { renderIntroPost } from "./render-posts/render-posts.js";
import { renderCardPosts } from "./render-posts/render-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";

fetchDetailedPost(5).then((post) => renderIntroPost(post));
fetchPosts().then((posts) => renderCardPosts(posts));

toggleMenu();
