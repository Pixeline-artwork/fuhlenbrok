$(document).ready(function() {

    // set active link
    url = window.location.href.split("/")
    currentPage = url[url.length - 1]
    
    for (link of $(".nav-link")) {
        if (link.getAttribute("href") == currentPage) {
            link.classList.add("active")
        }
    }
});