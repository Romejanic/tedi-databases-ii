/**
 * Powered by glot.io
 */

 const TOKEN = "6f874be7-1fb3-49b2-b462-008e1a444a69";
 const API_URL = "https://run.glot.io/languages/python/latest";

 $(".code-box").each((i, el) => {
    let input = $(el).find("textarea.code-input");
    let output = $(el).find("pre.code-output");
    let xhr;

    function sendRequest() {
        if(xhr) {
            xhr.abort();
        }
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.status === 200 && xhr.readyState === 4) {
                let resp = JSON.parse(xhr.responseText);
                let out = resp.stdout;
                if(resp.stderr && resp.stderr.length >= 1) {
                    out += `\n======STDERR======\n${resp.stderr}`;
                }
                if(resp.error && resp.error.length >= 1) {
                    out += `\n======ERROR=====\n${resp.error}`;
                }
                output.text(out);
            }
        };
        xhr.onerror = (err) => {
            console.error(err);
            output.text("An error occurred running your code. Check the console for more info.");
        };

        let data = {
            command: "python3 main.py", // force it to use python 3
            files: [
                {
                    name: "main.py",
                    content: input.val()
                }
            ]
        };
        xhr.open("POST", API_URL, true);
        xhr.send(JSON.stringify(data));
    } 
    
    $(el).find("button").click(() => {
        output.slideDown();
        output.html("<i>");
        sendRequest();
    });

    output.hide();
 });