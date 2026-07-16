// ================================
// Birthday Gallery
// ================================

// Get all photos
const photos = document.querySelectorAll(".photo img");

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const bigImage = document.getElementById("bigImage");
const closeBtn = document.getElementById("close");

// ================================
// Open Image
// ================================

photos.forEach((photo) => {

    photo.addEventListener("click", function () {

        bigImage.src = this.src;

        lightbox.style.display = "flex";

    });

});

// ================================
// Close Image
// ================================

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// Close when clicking outside image

lightbox.addEventListener("click", function (e) {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

// ================================
// Continue Button
// ================================

function nextPage() {

    document.body.style.opacity = "0";

    setTimeout(() => {

        // Go to the Flipbook page
        window.location.href = "flipbook.html";

    }, 800);

}

// ================================
// Fade In Animation
// ================================

window.onload = () => {

    document.body.style.opacity = "0";

    document.body.style.transition = "opacity 1s ease";

    setTimeout(() => {

        document.body.style.opacity = "1";

    }, 100);

};

// ================================
// Auto Highlight Effect
// ================================

let index = 0;

setInterval(() => {

    photos.forEach(photo => {

        photo.style.transform = "scale(1)";
        photo.style.transition = "0.4s";

    });

    if (photos.length > 0) {

        photos[index].style.transform = "scale(1.08)";

        index++;

        if (index >= photos.length) {

            index = 0;

        }

    }

}, 2500);