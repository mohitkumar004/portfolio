// const typed = new Typed("#text", {
//     Strings: ["frontend Developer", "Web Developer"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });
var typed = new Typed('#text', {
    strings: ['Frontend Developer ', 'Web Developer.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
$(document).ready(function () {
    $(window).bind('scroll', fetchMore);
});

fetchMore = function () {
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 300) {
        $(window).unbind('scroll', fetchMore);
        $.post('ajax/ajax_manager.php', { 'action': 'moreReviews', 'start': $('.review').length, 'step': 5 },
            function (data) {
                if (data.length > 10) {
                    $(data).insertBefore($('#moreHolder'));
                    $(window).bind('scroll', fetchMore);
                }
            });
    }
}
