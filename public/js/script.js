$(".product-container").click(function(){if(!$(this).parent().hasClass("product-disabled")){$(this).toggleClass("product-selected");var s=$(this).closest(".product-wrapper").find(".desc");s.html("Печень утки разварная с артишоками."==s.html()?'Чего сидишь? Порадуй котэ, <span class="buy-cta">купи</span>.':"Печень утки разварная с артишоками.")}$(this).hasClass("product-selected-mouseleave")&&$(this).removeClass("product-selected-mouseleave")}),$("body").on("click",".buy-cta",function(){var s=$(this).parent().parent().find(".product-container");s.toggleClass("product-selected");var e=$(this).parent();e.html("Печень утки разварная с артишоками."==e.html()?'Чего сидишь? Порадуй котэ, <span class="buy-cta">купи</span>.':"Печень утки разварная с артишоками.")}),$(".product-container").mouseleave(function(){$(this).hasClass("product-selected")&&($(this).addClass("product-selected-mouseleave"),$(this).find("h4").html("Котэ не одобряет?"))}),$(".product-container").mouseenter(function(){$(this).hasClass("product-selected-mouseleave")&&($(this).removeClass("product-selected-mouseleave"),$(this).find("h4").html("Сказочное заморское яство"))}),$(".product-disabled").find(".desc").html("Печалька, с фуа-гра закончился.").css("color","#ffff66");