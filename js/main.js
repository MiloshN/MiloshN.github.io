$(document).ready(function() {
  $("#show-label-1").on("click", function() {
    $("#to-show-1").toggle("fast");
    $(".toggle-1").toggleClass("toggle-rotate");
  });
  $("#show-label-2").on("click", function() {
    $("#to-show-2").toggle("fast");
    $(".toggle-2").toggleClass("toggle-rotate");
  });
  $("#show-label-3").on("click", function() {
    $("#to-show-3").toggle("fast");
    $(".toggle-3").toggleClass("toggle-rotate");
  });
  $("#show-label-4").on("click", function() {
    $("#to-show-4").toggle("fast");
    $(".toggle-4").toggleClass("toggle-rotate");
  });
  $("#show-label-5").on("click", function() {
    $("#to-show-5").toggle("fast");
    $(".toggle-5").toggleClass("toggle-rotate");
  });
  $("#show-label-6").on("click", function() {
    $("#to-show-6").toggle("fast");
    $(".toggle-6").toggleClass("toggle-rotate");
  });
  $(".partners__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
  let resize = $(window).width();
  if (resize <= 460) {
    $(".header__navigation").hide();
    $(".cross").hide();
    $(".toggle-menu").hide();
    $(".hamburger").show();
    $(".hamburger").on("click", function() {
      $(".toggle-menu").slideToggle("slow", function() {
        $(".hamburger").hide();
        $(".cross").show();
      });
    });

    $(".cross").on("click", function() {
      $(".toggle-menu").slideToggle("slow", function() {
        $(".cross").hide();
        $(".hamburger").show();
      });
    });
  } else {
    $(".header__navigation").show();
    $(".cross").hide();
    $(".toggle-menu").hide();
    $(".hamburger").hide();
  }
});
