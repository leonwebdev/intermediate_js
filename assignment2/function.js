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

    /**
     * [smallText make text size to 12px]
     *
     * @return  {[void]}  [return void]
     */
    function smallText() {
        $('#text_box').css({ 'font-size': '12px' });
    }

    /**
     * [mediumText make text size to 16px]
     *
     * @return  {[void]}  [return void]
     */
    function mediumText() {
        $('#text_box').css({ 'font-size': '16px' });
    }

    /**
     * [largeText make text size to 20px]
     *
     * @return  {[void]}  [return void]
     */
    function largeText() {
        $('#text_box').css({ 'font-size': '20px' });
    }

    /**
     * [toggleSwitch toggle buttons to show or hide]
     *
     * @return  {[void]}  [return void]
     */
    function toggleSwitch() {
        $('#text_btns').toggle('slow');
    }

    /**
     * [slideBox make slideBox move rightward and fadein]
     *
     * @return  {[void]}  [return void]
     */
    function slideBox() {
        $("#slide_box").animate(

            {
                "left": "+=500px",
                opacity: 1
            },

            "slow");
    }

    /**
     * [fadeOutSlideBox make slideBox move leftward and fadeout]
     *
     * @return  {[void]}  [return void]
     */
    function fadeOutSlideBox() {
        $("#slide_box").animate(

            {
                "left": "-=500px",
                opacity: 0
            },

            "slow");
    }

});