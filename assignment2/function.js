// do function after page loaded
$(document).ready(function () {

    // set click handlers
    $('#small').click(function () { smallText(); });

    // ********* FUNCTIONS ***********
    function smallText() {
        $('#text_box').css({ 'font-size': '1em' });
    }

});