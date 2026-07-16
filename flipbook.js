// ===============================
// Flipbook Script
// ===============================

const pages = document.querySelectorAll(".page");
let currentPage = 0;

// Show current page
function showPage(index) {

    pages.forEach((page, i) => {
        page.classList.remove("active");

        if (i === index) {
            page.classList.add("active");
        }
    });

}

// Next Page
function nextPage() {

    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }

}

// Previous Page
function prevPage() {

    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }

}

// Open Birthday Letter
function goNext() {
    window.location.href = "letter.html";
}

// Initialize
showPage(currentPage);

// Keyboard Support
document.addEventListener("keydown", function(event){

    if(event.key === "ArrowRight"){
        nextPage();
    }

    if(event.key === "ArrowLeft"){
        prevPage();
    }

});

// Mobile Swipe Support
let startX = 0;

document.addEventListener("touchstart", function(e){
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", function(e){

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){
        nextPage();
    }

    if(endX - startX > 50){
        prevPage();
    }

});