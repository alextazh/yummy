$(".product-container").click(function(){return $(this).toggleClass("product-selected"),$(".product-selected").hover(function(){$(this).addClass("product-selected-hover")},function(){$(this).removeClass("product-selected-hover")})});