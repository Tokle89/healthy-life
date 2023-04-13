export const viewMorePosts = () => {
  const postContainer = document.querySelectorAll(".post-container");
  const button = document.querySelector(".btn");

  postContainer.forEach((post) => {
    if (post.id > 10) {
      post.style.display = "flex";
    }
  });

  button.style.display = "none";
};
