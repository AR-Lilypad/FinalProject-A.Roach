const album = document.getElementById("imageBox");
let image = ["assets/images/calculator.JPG", "assets/images/digitalClock.JPG", "assets/images/groupPJ.JPG", "assets/images/coverPg3.jpg"];


let i = image.length;

// manual function carousel

function imageRight() {
    if (i < image.length) {
        i = i + 1;
    } else {
        i = 1;
    }
    album.innerHTML = "<img src=" + image[i - 1] + " .jpg>";
}

function imageLeft() {
    if (i < image.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = image.length;
    }
    album.innerHTML = "<img src=" + image[i - 1] + " .jpg>";
}


