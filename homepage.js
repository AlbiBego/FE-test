
function switchProducts(n) {
    var containers = document.querySelectorAll('.products-container');
    var dots = document.querySelectorAll('.dot');

    for (var i = 0; i < containers.length; i++) {
        containers[i].style.display = 'none'; // Hide all product groups
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from dots
    }

    // Display the selected product group and highlight the corresponding dot
    containers[n - 1].style.display = 'flex';
    dots[n - 1].className += " active";
}


