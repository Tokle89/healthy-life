import { fetchSpecificPost, fetchPosts } from "./api/fetch-posts.js";
import { renderIntroPost, renderPosts } from "./render-posts/render-posts.js";
import { toggleMenu } from "./functions/toggle-menu.js";
import { removeSpinner } from "./functions/remove-spinner.js";
import { displayErrorMsg } from "./functions/display-message.js";

const displayPosts = async () => {
  try {
    const introPost = await fetchSpecificPost(38);
    renderIntroPost(introPost);

    const posts = await fetchPosts();
    renderPosts(posts);
    removeSpinner();
  } catch (error) {
    console.warn(error);
    displayErrorMsg();
  }
};

displayPosts();
toggleMenu();
