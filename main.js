$(".hero-slider__slick-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false
  //autoplay: true
});
$(".features-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  //autoplay: true
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 513,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]
});
$(".team-slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]
});

$(document).ready(function() {
  let header = $(".fixed-top");

  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if (scroll >= 10) {
      header.addClass("header-active");
    } else {
      header.removeClass("header-active");
    }
  });

  $(".grid").isotope({
    itemSelector: ".grid-item"
  });

  // filter items on button click
  $(".works__container").on("click", "li", function() {
    var filterValue = $(this).attr("data-filter");
    $(".grid").isotope({ filter: filterValue });
    $(".works__container li").removeClass("filter-active");
    $(this).addClass("filter-active");
  });
  $(window).scroll(function() {
    let hT = $(".count-section").offset().top,
      hH = $(".count-section").outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > hT + hH - wH) {
      countNumber();
    }
  });
  let inlineList = $(window).width();
  if (inlineList <= 767) {
    $(".contact-list")
      .addClass("list-inline")
      .removeClass("normal-list");
    $(".contact-list")
      .children()
      .addClass("list-inline-item");
  } else {
    $(".contact-list")
      .removeClass("list-inline")
      .addClass("normal-list");
    $(".contact-list")
      .children()
      .removeClass("list-inline-item");
  }
  let currentVal = false;
  $(".hamburger").on("click", function() {
    $(this).toggleClass("hamburger-active");
    currentVal = !currentVal;
    if (currentVal) {
      $(".hamburger-nav").css({ display: "block" });
      $(".hamburger-nav").animate({ width: "150%" });
      let withValue = $(window).width();
      if (withValue <= 455) {
        $(".hamburger-nav").animate({ width: "159%" }, 0);
      }
      if (withValue <= 415) {
        $(".hamburger-nav").animate({ width: "165%" }, 0);
      }
      if (withValue <= 333) {
        $(".hamburger-nav").animate({ width: "180%" }, 0);
      }
    } else {
      $(".hamburger-nav").css({ display: "none" });
      $(".hamburger-nav").animate({ width: "0%" });
    }
  });
});

function countNumber() {
  $(".count").each(function() {
    var $this = $(this);
    $({ Counter: 0 }).animate(
      { Counter: $this.attr("data-stop") },
      {
        duration: 1000,
        easing: "swing",
        step: function(now) {
          $this.text(Math.ceil(now));
        }
      }
    );
  });
}
