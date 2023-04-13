import { renderComments } from "../render-posts/render-posts.js";

export async function postComment(name, email, comment, id) {
  const data = JSON.stringify({
    post: id,
    author_name: name.value,
    author_email: email.value,
    content: comment.value,
  });
  const url = "https://fredrik-tokle.no/schooltesting/healty-life/wp-json/wp/v2/comments?post=" + id;
  console.log(id);
  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    const result = response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchComments(id) {
  try {
    const url = "https://fredrik-tokle.no/schooltesting/healty-life/wp-json/wp/v2/comments?post=" + id;
    const response = await fetch(url);
    const result = await response.json();
    renderComments(result);
    console.log(result);
  } catch (error) {
    console.warn(error);
  }
}
