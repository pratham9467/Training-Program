const dropItem = document.querySelectorAll(".dropdown-item");
const dropDown = document.querySelectorAll(".dropdown-p");
const dropIcon = document.querySelectorAll(".drop-icon");

dropItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    dropDown[index].classList.toggle("active");
    dropIcon[index].classList.toggle("active");
  });
});
