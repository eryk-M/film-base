window.addEventListener("scroll", function() {
  const search = document.querySelector(".search");

  var scrollPosY = window.pageYOffset | document.body.scrollTop;
  if (scrollPosY > 100) {
    search.classList.add("search-active");
  } else if (scrollPosY <= 100) {
    search.classList.remove("search-active");
  }
});
