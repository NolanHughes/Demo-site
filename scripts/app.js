$(document).ready(function() {
  var $menu = $("#sidebar-wrapper");

  $(document)
    .on("click", ".js-menu-open", function() {
      $menu.addClass("open");

      return false;
    })
    // Sidebar : Close when Sidebar link clicked
    .on("click", "#close-btn", function() {
      $menu.removeClass("open");
    })
    // Sidebar : Close when Sidebar link clicked
    .on("click", "#list-close-btn", function() {
      $menu.removeClass("open");
    })
    // Sidebar : Close from outside the Sidebar
    .on("mouseup", "#main-wrapper", function() {
      $menu.removeClass("open");
    });

    $('input[type="checkbox"]').on('change', function() {
   $('input[type="checkbox"]').not(this).prop('checked', false);
    });
  });
