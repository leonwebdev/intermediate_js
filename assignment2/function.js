// do function after page loaded
$(document).ready(function () {

    // set click handlers
    $('#small').click(function () { smallText(); });
    $('#medium').click(function () { mediumText(); });
    $('#large').click(function () { largeText(); });
    $('#toggle_switch').click(function () { toggleSwitch(); });
    $('#slide_box_btn').click(function () { slideBox(); });
    $('#x_button').click(function () { fadeOutSlideBox(); });

    // ********* FUNCTIONS ***********
    function smallText() {
        $('#text_box').css({ 'font-size': '12px' });
    }

    function mediumText() {
        $('#text_box').css({ 'font-size': '16px' });
    }

    function largeText() {
        $('#text_box').css({ 'font-size': '20px' });
    }

    function toggleSwitch() {
        $('#text_btns').toggle('slow');
    }

    function slideBox() {
        $("#slide_box").animate(

            {
                "left": "+=500px",
                opacity: 1
            },

            "slow");
    }

    function fadeOutSlideBox() {
        $("#slide_box").animate(

            {
                "left": "-=500px",
                opacity: 0
            },

            "slow");
    }

    
});