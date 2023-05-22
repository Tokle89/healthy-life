import { toggleMenu } from "./functions/toggle-menu.js";
import { fetchSpecificPost } from "./api/fetch-posts.js";
import { renderAboutPost } from "./render-posts/render-posts.js";
import { displayErrorMsg } from "./functions/display-message.js";

const displayAboutPost = async () => {
  try {
    const aboutPost = await fetchSpecificPost(82);
    renderAboutPost(aboutPost);
  } catch (error) {
    console.warn(error);
    displayErrorMsg();
  }
};

displayAboutPost();
toggleMenu();
