document.addEventListener("DOMContentLoaded", function() {

    const   text=`NIMMA BIRIYANI MANE`;

    let index = 0;
    const speed = 50; // Adjust the speed here (milliseconds)
    const typewriterElement = document.getElementById("text");

    const intervalId = setInterval(function() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            console.log("ddd")
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, speed);
});