var $links = $(".itemLinks");

$links.click(function (e) {
    $links.removeClass("active");
    var clickedLink = e.target;
    clickedLink = $(clickedLink);
    var position = clickedLink.attr("data-pos");
    var translateValue = "translate3d("+ position * -25 +"%, 0px, 0)";
    $("#wrapper").css({
        transform: translateValue
    });

    clickedLink.addClass("active");

});

$($links[0]).addClass("active");