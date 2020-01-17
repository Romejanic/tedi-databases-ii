/**
 * Really basic, shitty reveal library
 * By Jack Davenport 2020
 */

$(document).ready(() => {
    let flag = false;
    $("#to-be-revealed").click(() => {
        if(flag) {
            let href = $("#to-be-revealed").attr("tbr-href");
            if(href) {
                window.location = href;
            }
        } else {
            $("#tbr-hidden").slideDown();
            let txt = $("#to-be-revealed").attr("tbr-text");
            if(txt) {
                $("#to-be-revealed").text(txt);
            }
            flag = true;
            // if anything should hide when the button is clicked,
            // hide it
            $("#tbr-hide").slideUp();
        }
    });
    $("#tbr-hidden").hide();
});