$(document).ready(function() {
  var $menu = $("#sidebar-wrapper");

  $(document).on("click", ".js-menu-open", function() {
      $menu.addClass("open");

      return false;
    })
    // Sidebar : Close when x button is clicked
    .on("click", "#close-btn", function() {
      $menu.removeClass("open");
    })
    // Sidebar : Close when sub-menu item clicked
    .on("click", "#list-close-btn", function() {
      $menu.removeClass("open");
    })
    // Sidebar : Close from outside of the Sidebar
    .on("mouseup", "#main-wrapper", function() {
      $menu.removeClass("open");
    });
    // Sidebar: Close accordion when clicked while open
    $('input[type="checkbox"]').on('change', function() {
   $('input[type="checkbox"]').not(this).prop('checked', false);
    });
  });

//   Upturn.prototype.initWaypoints = function() {
//     var t = "70%";
//     $(".underline, .project-icon, .value-icon").waypoint(function(t) {
//         "down" === t && ($(this)[0].element.className += " is-animated")
//     }, {
//         offset: t
//     }),
//     $(".services-icon").waypoint(function(t) {
//         "down" === t && ($(this)[0].element.className += " is-animated",
//         setTimeout(function() {
//             $(".services-icon-clouds").addClass("is-moving")
//         }, 2e3))
//     }, {
//         offset: t
//     })
// }
