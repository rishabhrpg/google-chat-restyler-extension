document.addEventListener('keydown', function (event) {
    if (event.keyCode === 86 && event.ctrlKey && event.shiftKey) {
        setTimeout(function () {
            sourceCode = event.target.innerText;
            sourceCode = "```\n" + sourceCode + "\n```";
            event.target.innerHTML = sourceCode;
        }, 100);
    }
}, false);
