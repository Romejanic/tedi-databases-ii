/**
 * Really basic, shitty reveal library
 * By Jack Davenport 2020
 */

$(document).ready(() => {
    let flag = false;
    let i = 0;
    let count = $("#to-be-revealed").attr("tbr-count") || 1;
    $("#to-be-revealed").click(() => {
        if(flag && i == count) {
            let href = $("#to-be-revealed").attr("tbr-href");
            if(href) {
                window.location = href;
            }
        } else if(i < count) {
            $(count <= 1 ? "#tbr-hidden" : "#tbr-hidden-" + (i+1)).slideDown();
            flag = true;
            i++;
            if(i >= count) {
                let txt = $("#to-be-revealed").attr("tbr-text");
                if(txt) {
                    $("#to-be-revealed").text(txt);
                }
            }
            // if anything should hide when the button is clicked,
            // hide it
            $("#tbr-hide").slideUp();
        }
    });
    $("#tbr-hidden").hide();
    if(count > 1) {
        for(let i = 1; i <= count; i++) {
            $("#tbr-hidden-" + i).hide();
        }
    }
});