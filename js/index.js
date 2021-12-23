let btn = document.querySelector(".menu__btn");

btn.onclick = function (e) {
  let element = document.querySelector(".body__muted");
  let body = document.querySelector("#body");
  if (element.classList.contains("muted")) {
    element.classList.toggle("muted");
    body.classList.toggle("hidden");
  } else {
    element.classList.toggle("muted");
    body.classList.toggle("hidden");
  }
};

// var $body = $("body"),
//   $header = $("header");
// $(document).on("scroll", function () {
//   block_position = $body.scrollTop() - 20;
//   if (block_position < 0) {
//     $header.addClass("white__bg");
//   } else {
//     $header.removeClass("white__bg");
//   }
// });
