$(".hero-slider__slick-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true
});
$(".features-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  autoplay: true,
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
  let outerSize = $(window).width();
  $(window).resize(function() {
    let windowsize = $(window).width();
    outerSize = windowsize;
    if (windowsize <= 767) {
      $(".contact-list")
        .addClass("list-inline")
        .removeClass("normal-list");
      $(".contact-list")
        .children()
        .addClass("list-inline-item")
        .children()
        .css({ color: "#cdd2d6" });
      $(".hero-slider__slick-slider .slick-dots")
        .addClass("list-inline")
        .children()
        .addClass("list-inline-item");
    } else {
      $(".contact-list")
        .removeClass("list-inline")
        .addClass("normal-list");
      $(".contact-list").removeClass("list-inline-item");
      $(".hero-slider__slick-slider .slick-dots")
        .removeClass("list-inline")
        .children()
        .removeClass("list-inline-item");
    }
  });
  if (outerSize <= 767) {
    $(".contact-list")
      .addClass("list-inline")
      .removeClass("normal-list");
    $(".contact-list")
      .children()
      .addClass("list-inline-item")
      .children()
      .css({ color: "#cdd2d6" });
    $(".hero-slider__slick-slider .slick-dots")
      .addClass("list-inline")
      .children()
      .addClass("list-inline-item");
  } else if (outerSize > 767) {
    $(".contact-list")
      .removeClass("list-inline")
      .addClass("normal-list");
    $(".contact-list").removeClass("list-inline-item");
    $(".hero-slider__slick-slider .slick-dots")
      .removeClass("list-inline")
      .children()
      .removeClass("list-inline-item");
  }
  $(".count-section").appear(function() {
    countNumber();
  });
  let currentVal = false;
  $(".hamburger").on("click", function() {
    $(this).toggleClass("hamburger-active");
    currentVal = !currentVal;
    if (currentVal) {
      $(".hamburger-nav").css({ display: "block" });
      $(".hamburger-nav").animate({ height: "350%" });
    } else {
      $(".hamburger-nav").css({ display: "none" });
      $(".hamburger-nav").animate({ height: "0%" });
    }
  });

  // Smooth scroll Safari only
  if (
    navigator.userAgent.indexOf("Safari") != -1 &&
    navigator.userAgent.indexOf("Chrome") == -1 &&
    navigator.userAgent.indexOf("CriOS/") == -1
  ) {
    $(".nav-link").on("click", function(e) {
      if (this.hash !== "") {
        e.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  }
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
