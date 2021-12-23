let terms = document.querySelector("#open-terms-link");
let policy = document.querySelector("#open-policy-link");
let invest = document.querySelector(".back-drops");
let mobile = document.querySelector(".mobile__drops");
let footerLink = document.querySelector(".nav__mobile--link");

terms.onclick = function (e) {
  e.preventDefault();
  let modal = document.querySelector("#open-terms");
  let body = document.querySelector("#body");
  if (modal.classList.contains("muted") != true) {
    modal.classList.toggle("muted");
    body.classList.toggle("hidden");
  }
  let close = document.querySelector(".close-terms");
  close.onclick = function (e) {
    modal.classList.toggle("muted");
    body.classList.toggle("hidden");
  };
};

policy.onclick = function (e) {
  e.preventDefault();
  let modal = document.querySelector("#open-policy");
  let body = document.querySelector("#body");
  if (modal.classList.contains("muted") != true) {
    modal.classList.toggle("muted");
    body.classList.toggle("hidden");
  }
  let close = document.querySelector(".close-policy");
  close.onclick = function (e) {
    modal.classList.toggle("muted");
    body.classList.toggle("hidden");
  };
};

invest.onclick = function (e) {
  e.preventDefault();
  let modal = document.querySelector(".back-drops__wrapper");
  let arrow = document.querySelector(".back-drops");
  let element = document.querySelector(".body__muted");
  let card = document.querySelectorAll(".back-drops__card");
  if (modal.classList.contains("muted")) {
    modal.classList.toggle("muted");
    arrow.classList.toggle("revers");
    element.classList.toggle("muted");
    for (let i = 0; i <= 5; i++) {
      card[i].classList.toggle("muted");
    }
  } else {
    modal.classList.toggle("muted");
    arrow.classList.toggle("revers");
    element.classList.toggle("muted");
    for (let i = 0; i <= 5; i++) {
      card[i].classList.toggle("muted");
    }
  }
};

$(".mobile__drops").click(function (e) {
  e.preventDefault();
  $(".link__inner").toggleClass("rotate");
  $(".submenu__wrapper").toggleClass("muted");
  $(".submenu__item:eq(0)").animate({ width: "toggle" }, 300, function () {
    $(this).next().animate({ width: "toggle" }, 300, arguments.callee);
  });
});

$(".nav__mobile--link").click(function (event) {
  event.preventDefault();
  $(".img__wrapper").toggleClass("rotate");
  $(".nav__submenu").toggleClass("muted");
  $(".nav__submenu li:eq(0)").fadeIn(100, function () {
    $(this).next().fadeIn(150, arguments.callee);
  });
});