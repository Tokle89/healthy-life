export const postComment = async (name, email, comment, id) => {
  const data = JSON.stringify({
    post: id,
    author_name: name.value,
    author_email: email.value,
    content: comment.value,
  });
  const url = "https://fredrik-tokle.no/schooltesting/healty-life/wp-json/wp/v2/comments?post=" + id;

  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchComments = async (id) => {
  const url = "https://fredrik-tokle.no/schooltesting/healty-life/wp-json/wp/v2/comments?post=" + id;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
