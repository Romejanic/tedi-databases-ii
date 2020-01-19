const PAGE_CSS = "css/code-box-page.css";

$(".code-box").each((i, el) => {
    $(el).find("iframe").each((i, el) => {
        let cssLink = document.createElement("link");
        cssLink.rel = "stylesheet";
        cssLink.href = PAGE_CSS;
        el.contentWindow.document.head.appendChild(cssLink);
    });
});