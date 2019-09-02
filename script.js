let button = document
  .getElementsByClassName("toggle-nav-icon")[0]
  .addEventListener("click", function() {
    document
      .getElementsByClassName("nav-list")[0]
      .classList.toggle("toggle-active");
  });
