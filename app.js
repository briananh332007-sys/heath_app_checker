// Habit Tracker entry point.
// Habit creation, approval, streaks, and localStorage will be added in the next steps.

document.addEventListener("DOMContentLoaded", () => {
  const todayLabel = document.querySelector("#todayLabel");

  todayLabel.textContent = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date());
});
