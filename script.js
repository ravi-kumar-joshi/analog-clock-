const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const digitalClock = document.querySelector("#digital-clock");

function setDate() {
  const now = new Date();

  // =========================
  // ANALOG CLOCK
  // =========================

  const seconds = now.getSeconds();

  const mins = now.getMinutes();

  const hour = now.getHours();

  // Calculate rotations

  const secondRotation = 6 * seconds;

  const minuteRotation = 6 * mins + seconds / 10;

  const hourRotation = 30 * (hour % 12) + mins / 2;

  // Apply rotations

  secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;

  minsHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;

  hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;

  // =========================
  // DIGITAL CLOCK
  // =========================

  let displayHour = hour;

  const ampm = displayHour >= 12 ? "PM" : "AM";

  displayHour = displayHour % 12 || 12;

  const formattedHour = String(displayHour).padStart(2, "0");

  const formattedMinutes = String(mins).padStart(2, "0");

  const formattedSeconds = String(seconds).padStart(2, "0");

  digitalClock.textContent = `${formattedHour}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
}

setDate();

setInterval(setDate, 1000);
