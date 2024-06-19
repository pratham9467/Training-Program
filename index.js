const dropItem = document.querySelectorAll(".dropdown-item");
const dropDown = document.querySelectorAll(".dropdown-p");
const dropIcon = document.querySelectorAll(".drop-icon");

dropItem.forEach((item) => {
  item.addEventListener("click", () => {
    dropDown.forEach((dropitem) => {
      dropitem.classList.toggle("active");
    });
    dropIcon.forEach((icon) => {
      icon.classList.toggle("active");
    });
  });
});

