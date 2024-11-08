const menu = document.querySelector(".menuu");
const list = document.querySelectorAll(".list");
console.log(list);
console.log(menu);
menu.addEventListener("click", function () {
  list.forEach((item) => {
    const check = item.classList.contains("active");
    console.log(check);
    if (check) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
});

let isScrolling;
const $backToTop = $(".back-to-top");

$backToTop.hide();

$(window).scroll(function () {
  clearTimeout(isScrolling);

  $backToTop.fadeIn("slow");

  isScrolling = setTimeout(function () {
    $backToTop.fadeOut("slow");
  }, 1000);
});

$backToTop.click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
});
