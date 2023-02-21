$(document).ready(function() {
    $('.nav__burger').click(function() {
        $('.nav_mobile,.wrap_header').toggleClass('is-active');
        $('.btn-burger').toggleClass('open');
    });
});
