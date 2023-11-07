var r = document.querySelector(':root');

let ballElement = document.getElementById("ball");

function bounceBall(counter) {
    ballElement.style.setProperty("--max-height", `-${counter}in`);
    console.log(ballElement.style)
    if (counter > 0)
        setTimeout(() => {
            bounceBall(counter - 1)
        }, 2050);
}

bounceBall(10);