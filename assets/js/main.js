// WHEN CHANGING THIS FILE, MAKE SURE TO RECOMPILE TO main.min.js!!!

$(function() {
  // Alternative pricing switches
  function normalPrice(switchElement, target) {
    // Display normal price
    $(target).find('.js-price-alternative').addClass('js-price-hidden');
    $(target).find('.js-price-normal').removeClass('js-price-hidden');

    $(switchElement)
      .parent()
      .find('.js-switch-label--normal')
      .addClass('js-switch-label--active');
    $(switchElement)
      .parent()
      .find('.js-switch-label--alternative')
      .removeClass('js-switch-label--active');
  }

  function alternativePrice(switchElement, target) {
    // Display alternative price
    $(target).find('.js-price-normal').addClass('js-price-hidden');
    $(target).find('.js-price-alternative').removeClass('js-price-hidden');

    $(switchElement)
      .parent()
      .find('.js-switch-label--normal')
      .removeClass('js-switch-label--active');
    $(switchElement)
      .parent()
      .find('.js-switch-label--alternative')
      .addClass('js-switch-label--active');
  }

  // On .js-price-switch toggle, change the prices
  $('.js-price-switch').change(function() {
    // $this will contain a reference to the checkbox
    // target has ID of element where the CSS modifications will apply
    var target = $(this).attr("data-target");
    if (this.checked) {
      normalPrice(this, target);
    } else {
      alternativePrice(this, target);
    }
  });


  // // Expand all FAQ sections when .js-faq-expand-all is clicked
  // $('.js-faq-expand-all').on("click", function(){
  //   $(".js-faq-accordion .collapse").collapse('show');
  // });

  /* ================================================== */


  // Replace obfuscated email address with a correct one
  // It's a simple protection but should work on most bots as they don't
  // execute JavaScript
  $('.email-address').each(function() {
    $(this).text(
      $(this).
      text()
      .replace("(at)", "@")
      .replace("(dot)",".")
    );
  });
  // .text(
  //   $('.email-address')
  //     .text()
  //     .replace("(at)", "@")
  //     .replace("(dot)",".")
  // );

  /* ================================================== */


  //- "Click to copy to clipboard" for coupon codes
  //- We need to disable Bootstrap's modal enforce focus to make clipboard.js work
  //- https://github.com/zenorocha/clipboard.js/issues/155#issuecomment-217372642
  $.fn.modal.Constructor.prototype.enforceFocus = function() {};
  //- Now attach the clipboard to all elements with 'copy' class
  var clipboard = new Clipboard('.copy');
  clipboard.on('success', function(e) {
    e.trigger.className = "copy copied";
    //-Remove the class after 2 seconds
    setTimeout(function(){
      e.trigger.className = "copy uncopied";
    }, 2000);
  });

  /* ================================================== */

  // Nested navigation with anchor links won't hide the menu on mobile after click.
  // This snippet will fix it
  // source: https://github.com/twbs/bootstrap/issues/12852#issuecomment-59621810
  $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && ( $(e.target).attr('class') != 'dropdown-toggle' ) ) {
      $(this).collapse('hide');
    }
  });

  /* ================================================== */

  // Share popup (source: https://codepen.io/patrickkahl/pen/DxmfG)
  $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {

    // Prevent default anchor event
    e.preventDefault();

    // Set values for window
    intWidth = intWidth || '600';
    intHeight = intHeight || '600';
    strResize = (blnResize ? 'yes' : 'no');

    // Set title and open popup with focus on it
    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,
        objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
  };
  $(document).ready(function ($) {
    $('.js-social-share').on("click", function(e) {
      $(this).customerPopup(e);
    });
  });

  /* ================================================== */

});
