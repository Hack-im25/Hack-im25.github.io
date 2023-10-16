function openOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'flex';
}

function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'none';
}
function scrollToPortfolio() {
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
}
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}
function toggleMenu() {
    var mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.style.display === "none" || mobileNav.style.display === "") {
        mobileNav.style.display = "block";
    } else {
        mobileNav.style.display = "none";
    }
}

// Hide menu when a link is clicked
document.querySelectorAll("#mobile-nav nav ul li a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("mobile-nav").style.display = "none";
    });
});
window.addEventListener("scroll", function() {
    document.getElementById("mobile-nav").style.display = "none";
});
