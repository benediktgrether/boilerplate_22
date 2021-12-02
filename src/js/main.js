document.addEventListener('readystatechange', function(event) {
    if (document.readyState === "complete") {
        console.log(document.readyState);
    }
});