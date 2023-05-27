(function ($) {
  $(".owl-features").owlCarousel({
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },

      1000: {
        items: 1,
      },
    },
  });
  $(".owl-features1").owlCarousel({
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },

      1000: {
        items: 3,
      },
    },
  });
  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on("click", function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $("a").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");

      var target = this.hash,
        menu = target;
      var target = $(this.hash);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 79,
          },
          500,
          "swing",
          function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
          }
        );
    });
  });
 
})(window.jQuery);
