import { fetchSpecificPost, fetchPosts } from "./api/fetch-posts.js";
import { renderIntroPost, renderCardPosts } from "./render-posts/render-posts.js";
import { removeSpinner } from "./functions/remove-spinner.js";
import { toggleMenu } from "./functions/toggle-menu.js";
import { displayErrorMsg } from "./functions/display-message.js";

toggleMenu();

const displayPosts = async () => {
  try {
    const introPost = await fetchSpecificPost(5);
    renderIntroPost(introPost);
    const latestPosts = await fetchPosts();
    renderCardPosts(latestPosts);
    removeSpinner();
  } catch (error) {
    console.warn(error);
    displayErrorMsg();
  }
};

displayPosts();
