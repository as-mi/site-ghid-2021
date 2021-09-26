const scrollBtn = document.querySelector(".scrollButton");

scrollBtn.addEventListener("click", () => {
  let cuprins = document.getElementById("start_point");
  cuprins.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest'
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
