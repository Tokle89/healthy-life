export function parsePost(post) {
  const parser = new DOMParser();
  const parsedPost = parser.parseFromString(post.content.rendered, `text/html`);
  return parsedPost;
}

export function parseDate(post) {
  const dateString = post.date;
  const date = new Date(dateString).toLocaleDateString();
  return date;
}
