$(function () {
    $('.showForm').on('click', function (e) {
        e.preventDefault();
        $('.form--content form').show();
        $('.showForm').hide();
    });

    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if ( scrollTop > 90 ) {
            $('.form--content > div').addClass("sticky");
        } else {
            $('.form--content > div').removeClass("sticky");
        }
    });

});