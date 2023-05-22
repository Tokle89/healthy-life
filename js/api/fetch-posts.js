const baseUrl = "https://fredrik-tokle.no/schooltesting/healty-life/wp-json/wp/v2/posts/";
const embeded = `?_embeded`;
const url = baseUrl + embeded + `&per_page=50`;

export const fetchPosts = async () => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export const fetchSpecificPost = async (id) => {
  const specificUrl = baseUrl + id + embeded;

  const response = await fetch(specificUrl);
  const result = await response.json();
  return result;
};
