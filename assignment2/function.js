// do function after page loaded
$(document).ready(function () {

    // set click handlers
    $('#small').click(function () { smallText(); });
    $('#medium').click(function () { mediumText(); });
    $('#large').click(function () { largeText(); });

    // ********* FUNCTIONS ***********
    function smallText() {
        $('#text_box').css({ 'font-size': '1em' });
    }

    function mediumText() {
        $('#text_box').css({ 'font-size': '1.3em' });
    }

    function largeText() {
        $('#text_box').css({ 'font-size': '1.6em' });
    }

});