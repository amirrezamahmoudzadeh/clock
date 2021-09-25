const time = document.querySelector("#time"),
  date = document.querySelector("#date");

setInterval(() => {
  let now = new Date();

  time.innerHTML = now.toLocaleTimeString("fa-IR")

  date.innerHTML = now.toLocaleDateString("fa-IR" , {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}, 1000);
