/**
 * Javascript for Lab 5
 * This is the only file you should edit!
 */


$(document).ready(function () {

    $('#remove_deprecated').click(function () { strikeOutAndDisableLink() });
    $('#main_h2').click(function () { colorH2InMainRed() });
    $('#secondary_h3').click(function () { colorH3InSecondaryBlue() });
    $('#bold_p_main').click(function () { boldFirstParagraphInMain() });
    $('#bold_p_secondary').click(function () { boldLastParagraphInSecondary() });
    $('#hide_annoying').click(function () { hideAllAnnoyAnnounce() });
    $('#show_annoying').click(function () { showAllAnnoyAnnounce() });

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

    function colorH2InMainRed() {
        $('div.main h2').css(
            {
                'color': 'red'
            }
        );
    }

    function colorH3InSecondaryBlue() {
        $('div.secondary h3').css(
            {
                'color': 'blue'
            }
        );
    }

    function boldFirstParagraphInMain() {
        $('div.main>p:first-of-type').css(
            {
                'font-weight': '700'
            }
        );
    }

    function boldLastParagraphInSecondary() {
        $('div.secondary>p:last-of-type').css(
            {
                'font-weight': '700'
            }
        );
    }

    function hideAllAnnoyAnnounce() {
        $('.annoying').fadeOut('slow');
    }

    function showAllAnnoyAnnounce() {
        $('.annoying').fadeIn('slow');
    }

});