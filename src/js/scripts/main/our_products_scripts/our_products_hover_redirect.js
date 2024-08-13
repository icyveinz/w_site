$(function() {
    const redirect_nodes = '#active-session, #active-session > img';
    $(redirect_nodes).on({
        mouseenter: function() {
            $(this).css('cursor', 'pointer');
        },
        mouseleave: function() {
            $(this).css('cursor', 'auto');
        }
    });
    $(redirect_nodes).on('click', function() {
        window.open('https://ugo-vape.ru/', '_blank');
    })
})