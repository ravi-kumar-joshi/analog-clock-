const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hour = now.getHours();

    const srotation = 6 * seconds;
    const mrotation = 6 * mins;
    const hrotation = 30 * hour + mins / 2;

    hourHand.style.transform = `translateX(-50%) rotate(${hrotation}deg)`;
    minsHand.style.transform = `translateX(-50%) rotate(${mrotation}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${srotation}deg)`;
}

setInterval(setDate, 1000);
setDate(); // call once on load to avoid delay