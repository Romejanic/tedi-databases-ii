/**
 * Really basic, shitty reveal library
 * By Jack Davenport 2020
 * 
 * Note: this script includes a debug mode to make development easier
 * by unhiding the solutions automatically. To enable this, add '?debug=true'
 * to the end of the URL you are working on.
 */

$(document).ready(() => {
    // first check if debug is enabled
    let urlSearch = window.location.search.substring(1);
    let debugMode = urlSearch.indexOf("debug=true") > -1;
    if(debugMode) {
        $("#to-be-revealed").text("WARNING: DEBUG MODE IS ACTIVE!");
    }
    // -------------------------------
    let flag = debugMode;
    let count = $("#to-be-revealed").attr("tbr-count") || 1;
    let i = debugMode ? count : 0;
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
    if(!debugMode) {
        $("#tbr-hidden").hide();
        if(count > 1) {
            for(let i = 1; i <= count; i++) {
                $("#tbr-hidden-" + i).hide();
            }
        }
    }
});