$(document).ready(function() {
  $(".show-label").each(function(i) {
    $(this).on("click", function() {
      $(".to-show").each(function(index) {
        if (i === index) {
          $(this).toggle("fast");
        }
      });
      $(".toggle").each(function(indx) {
        if (i === indx) {
          $(this).toggleClass("toggle-rotate");
        }
      });
    });
  });
  $(".partners__slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          infinite: true
        }
      }
    ]
  });

  $(".hamburger").on("click", function() {
    $(".toggle-menu").slideToggle("slow", function() {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });
  $(".hamburger").dblclick(function(e) {
    e.preventDefault();
  });
  $(".cross").on("click", function() {
    $(".toggle-menu").slideToggle("slow", function() {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });
  $(".cross").dblclick(function(e) {
    e.preventDefault();
  });

  function openSpecGallery(i) {
    galerija = baguetteBox.run(".references__gallery-hidden");
    baguetteBox.show(0, galerija[i]);
  }

  $(".open-gallery").on("click", function() {
    const index = $(this).data("open-gallery");
    openSpecGallery(index);
  });
});
