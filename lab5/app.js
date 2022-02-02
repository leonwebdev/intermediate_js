/**
 * Javascript for Lab 5
 * This is the only file you should edit!
 */


$(document).ready(function () {
    strikeOutAndDisableLink();
    colorH2InMainRed();
});


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
    
}