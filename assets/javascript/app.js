const album = document.getElementById("imageBox");
let image = ["assets/images/calculator.JPG", "assets/images/digitalClock.JPG", "assets/images/groupPJ.JPG", "assets/images/coverPg3.jpg"];


let i = image.length;

// ======  manual function carousel  ===========

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


// =================== Modal ================================

function showModal() {
    document.getElementById("modal").style.visibility = "visible";
}
setTimeout("showModal()", 5000);

function hideModal() {
    document.getElementById("modal").style.visibility = "hidden";
}
setTimeout("hideModal()", 20000);

// function clickHideModal() {
//     document.getElementById("closeButton")
//         .addEventListener("click", clickHideModal).style.visibility = "hidden";
// };

const closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", function () {
    hideModal();
});

// ================================= Calculator Section ==================================

//button events


//adding
addBtn = document.getElementById("addBtn");
addNumbers = function () {


    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    // console.log(number1, number2)

    sum = parseInt(number1.value) + parseInt(number2.value);

    result = document.getElementById("displayResults");
    result.innerText = sum;
}


addBtn.addEventListener("click", addNumbers);

//subtract
subtractBtn = document.getElementById("subtractBtn");
subtractNumbers = function () {


    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    // console.log(number1, number2)

    difference = parseInt(number1.value) - parseInt(number2.value);

    result = document.getElementById("displayResults");
    result.innerText = difference;
}


subtractBtn.addEventListener("click", subtractNumbers);


//multiply
multiplyBtn = document.getElementById("multiplyBtn");
multiplyNumbers = function () {


    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    // console.log(number1, number2)

    mult = parseInt(number1.value) * parseInt(number2.value);

    result = document.getElementById("displayResults");
    result.innerText = mult;
}


multiplyBtn.addEventListener("click", multiplyNumbers);


//divide
divideBtn = document.getElementById("divideBtn");
divideNumbers = function () {


    number1 = document.getElementById("number1");
    number2 = document.getElementById("number2");
    // console.log(number1, number2)

    divided = parseInt(number1.value) / parseInt(number2.value);

    result = document.getElementById("displayResults");
    result.innerText = divided;
}

divideBtn.addEventListener("click", divideNumbers);


//clear button
clearBtn = document.getElementById("clearBtn");
clearResults = function clear() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

    result = document.getElementById("displayResults");
    result.innerText = "";
}

clearBtn.addEventListener("click", clearResults);


