const cardsContainer = document.querySelector(".cards-container");

export const slider = (direction) => {
  const cards = document.querySelectorAll(".card");
  const firstCard = cards[0];
  let firstImgWidth = firstCard.clientWidth + 50;
  if (direction === "left") {
    cardsContainer.scrollLeft -= firstImgWidth;
  }
  if (direction === "right") {
    cardsContainer.scrollLeft += firstImgWidth;
  }
};
