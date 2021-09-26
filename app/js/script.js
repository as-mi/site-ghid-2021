const scrollBtn = document.querySelector(".scrollButton");

scrollBtn.addEventListener("click", () => {
  let cuprins = document.getElementById("start_point");
  window.scrollTo({
    behavior: 'smooth',
    top: cuprins.offsetHeight
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
