/**
 * By Jack Davenport 2020
 * Powered by glot.io
 * 
 * API REFERENCE: https://glot.io/api
 */

 const TOKEN = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx";
 //const API_URL = "https://run.glot.io/languages/python/latest";
const API_URL = "http://localhost:7777";

 $(".code-box").each((i, el) => {
    let input = $(el).find("textarea.code-input");
    let output = $(el).find("pre.code-output");

    function sendRequest() {
        let data = {
            command: "python3 main.py", // force it to use python 3
            files: [
                    {
                        name: "main.py",
                        content: input.val()
                    }
                ]
            };

        $.ajax(API_URL, {
            contentType: "application/x-www-form-urlencoded",
            data: JSON.stringify(data),
            headers: {
                "Authorization": `Token ${TOKEN}`
            },
            method: "POST",
            success: function(data) {
                alert(data);
            },
            error: function(err) {
                alert("error");
            }
        });
        // if(xhr) {
        //     xhr.abort();
        // }
        // xhr = new XMLHttpRequest();
        // xhr.onreadystatechange = function() {
        //     if(xhr.status === 200 && xhr.readyState === 4) {
        //         let resp = JSON.parse(xhr.responseText);
        //         let out = resp.stdout;
        //         if(resp.stderr && resp.stderr.length >= 1) {
        //             out += `\n======STDERR======\n${resp.stderr}`;
        //         }
        //         if(resp.error && resp.error.length >= 1) {
        //             out += `\n======ERROR=====\n${resp.error}`;
        //         }
        //         output.text(out);
        //     }
        // };
        // xhr.onerror = (err) => {
        //     console.error(err);
        //     output.text("An error occurred running your code. Check the console for more info.");
        // };

        // 
        // xhr.open("POST", API_URL);
        // xhr.setRequestHeader("Authorization", `Token ${TOKEN}`);
        // xhr.setRequestHeader("Content-Type", "text/plain");
        // xhr.send(JSON.stringify(data));
    } 
    
    $(el).find("button").click(() => {
        output.slideDown();
        output.html("<i>");
        sendRequest();
    });

    output.hide();
 });