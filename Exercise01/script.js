document.addEventListener("DOMContentLoaded", function () {
    let animatedElement = document.getElementById("animatedElement");

    function moveLeft() {
        animatedElement.style.left = "0px";
    }

    setTimeout(moveLeft, 1000);
});
