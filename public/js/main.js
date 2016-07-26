$(function() {
  // Your custom JavaScript goes here

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

  // Expand all FAQ sections when .faq-expand-all is clicked
  $('.faq-expand-all').on("click", function(){
    $(".faq-accordion .collapse").collapse('show');
  });

  // Replace obfuscated email address with a correct one
  // It's a simple protection but should work on most bots as they don't
  // execute JavaScript
  $('.email-address').text(
    $('.email-address')
      .text()
      .replace("(at)", "@")
      .replace("(dot)",".")
  );
});
