/**
 * Javascript for Lab 5
 * This is the only file you should edit!
 */

// do function after page loaded
$(document).ready(function () {

    $('#remove_deprecated').click(function () { strikeOutAndDisableLink() });
    $('#main_h2').click(function () { colorH2InMainRed() });
    $('#secondary_h3').click(function () { colorH3InSecondaryBlue() });
    $('#bold_p_main').click(function () { boldFirstParagraphInMain() });
    $('#bold_p_secondary').click(function () { boldLastParagraphInSecondary() });
    $('#hide_annoying').click(function () { hideAllAnnoyAnnounce() });
    $('#show_annoying').click(function () { showAllAnnoyAnnounce() });

    /**
     * [strikeOutAndDisableLink strike out selected anchors and prevent opening links]
     *
     * @return  {[void]}  [return void]
     */
    function strikeOutAndDisableLink() {

        $('li.deprecated a').each(function () {
            $(this).css(
                {
                    'color': '#900',
                    'text-decoration': 'line-through'
                }
            );

            $(this).click(function (e) {
                e.preventDefault();
            });
        });
    }

    /**
     * [colorH2InMainRed make h2 in main red]
     *
     * @return  {[void]}  [return void]
     */
    function colorH2InMainRed() {
        $('div.main h2').css(
            {
                'color': 'red'
            }
        );
    }

    /**
     * [colorH3InSecondaryBlue make h3 in secondary blue]
     *
     * @return  {[void]}  [return void]
     */
    function colorH3InSecondaryBlue() {
        $('div.secondary h3').css(
            {
                'color': 'blue'
            }
        );
    }

    /**
     * [boldFirstParagraphInMain make 1st paragraph in main bold]
     *
     * @return  {[void]}  [return void]
     */
    function boldFirstParagraphInMain() {
        $('div.main>p:first-of-type').css(
            {
                'font-weight': '700'
            }
        );
    }

    /**
     * [boldLastParagraphInSecondary make last paragraph in secondary bold]
     *
     * @return  {[void]}  [return void]
     */
    function boldLastParagraphInSecondary() {
        $('div.secondary>p:last-of-type').css(
            {
                'font-weight': '700'
            }
        );
    }

    /**
     * [hideAllAnnoyAnnounce hide all annoying announcements]
     *
     * @return  {[void]}  [return void]
     */
    function hideAllAnnoyAnnounce() {
        $('.annoying').fadeOut('slow');
    }

    /**
     * [showAllAnnoyAnnounce show all annoying announcements]
     *
     * @return  {[void]}  [return void]
     */
    function showAllAnnoyAnnounce() {
        $('.annoying').fadeIn('slow');
    }

});