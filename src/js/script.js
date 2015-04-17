// Item selection on clicking the product-container
$('.product-container').click(function() {
  // First, make sure the product is not disabled
  if (!$(this).parent().hasClass('product-disabled')) {
    // Then apply effects
    $(this).toggleClass('product-selected');
    // Apply description change
    var desc = $(this).closest('.product-wrapper').find('.desc');
    desc.html() == 'Печень утки разварная с артишоками.' ? desc.html('Чего сидишь? Порадуй котэ, <span class="buy-cta">купи</span>.') : desc.html('Печень утки разварная с артишоками.');  
  }
  // Remove selected item's mouseleave effects on deselect
  if ($(this).hasClass('product-selected-mouseleave')) {
    $(this).removeClass('product-selected-mouseleave');
  }
});

// Item selection on clicking the link
$('body').on('click', '.buy-cta', function() {
  // Find the current product-container
  var productItem = $(this).parent().parent().find('.product-container');
  // Apply effects
  productItem.toggleClass('product-selected');
  // Apply description change
  var desc = $(this).parent();
  desc.html() == 'Печень утки разварная с артишоками.' ? desc.html('Чего сидишь? Порадуй котэ, <span class="buy-cta">купи</span>.') : desc.html('Печень утки разварная с артишоками.');
});

// Apply mouseleave effects on selected item
$('.product-container').mouseleave(function() {
  if ($(this).hasClass('product-selected')) {
    $(this).addClass('product-selected-mouseleave');
    $(this).find('h4').html('Котэ не одобряет?');
  }
});

// Remove mouseleave effects on selected item
$('.product-container').mouseenter(function() {
  if ($(this).hasClass('product-selected-mouseleave')) {
    $(this).removeClass('product-selected-mouseleave');
    $(this).find('h4').html('Сказочное заморское яство');
  }
});

// Change desc for disabled products
$('.product-disabled').find('.desc').html('Печалька, с фуа-гра закончился.').css('color', '#ffff66');
