/**
 * Get the value correspondin to the query parameter
 * @param {string} name - The name of the url query parameter
 * @return {string} The value of the query paramter
 */
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    if (results == null) {
        return null;
    } else {
        return decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var title = getUrlParameter('title');
    document.getElementById('title-placeholder').innerHTML
        = title == null ? 'Not found': title;
    document.getElementById('text-placeholder').innerHTML
        = title == null ? '' : 'This page is currently under construction.';
}, false);

// Toggle aria-expanded label whenever sub menu is opened / closed

$(".dropdown-toggle").click(function (e) {

    let ariaExpanded = e.target.getAttribute("aria-expanded");

    if (ariaExpanded === "true") {
        ariaExpanded = "false";
    } else {
        ariaExpanded = "true";
    }

    e.target.setAttribute("aria-expanded", ariaExpanded)
});


// Close dropdown by clicking escape button

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        let expandedMenuItem = $('.dropdown-menu.show');
        expandedMenuItem.removeClass("show");
    }
});


// Close dropdown when navigating to next menu item with tab key

$(document).keyup(function (e) {
    if (e.keyCode === 9) {
        if (e.target.className.includes("dropdown-toggle")) {
            let expandedMenuItem = $('.dropdown-menu.show');
            expandedMenuItem.removeClass("show");
        }
    }
});