document.addEventListener("DOMContentLoaded", function () {
  var captions = document.querySelectorAll(".carousel-caption");

  captions.forEach(function (caption) {
    caption.addEventListener("click", function () {
      if (caption.classList.contains("fade-out")) {
        caption.classList.remove("fade-out");
        caption.classList.add("fade-in"); 
      } else {
        caption.classList.remove("fade-in"); 
        caption.classList.add("fade-out"); 
      }
    });
  });
});