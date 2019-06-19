$(document).ready(function() {
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

  function openSpecGallery(i) {
    galerija = baguetteBox.run(".references__gallery-hidden");
    baguetteBox.show(0, galerija[i]);
  }

  $(".open-gallery").on("click", function() {
    const index = $(this).data("open-gallery");
    openSpecGallery(index);
  });
});
