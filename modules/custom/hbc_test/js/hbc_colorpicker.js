(function ($) {
    Drupal.behaviors.hbc_colorpicker = {
      attach: function(context, settings) {
        $("#edit-field-favourite-color-0-value").spectrum({
          color: "#f00"
      });    }
    };
  
  }(jQuery));