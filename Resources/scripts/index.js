"use strict";

const canvas = document.querySelector(".bars");
let animationQueue = [];
const bars = canvas.childNodes;
let transitionTime;
let timeGap = 100;

let data = [1, 3, 5, 8, 7, 6, 4, 2];

function plotBars() {
  canvas.innerHTML = "";
  canvas.style[
    "grid-template-columns"
  ] = `repeat(${data.length}, minmax(0, 1fr))`;
  let height = canvas.getBoundingClientRect().height;
  let maxValue = Math.max(...data);
  data.forEach((value, index) => {
    let el = document.createElement("div");
    el.classList.add("bar");
    el.setAttribute("id", `bar${index}`);
    el.setAttribute("data-value", value);
    el.style.height = `${(value / maxValue) * height}px`;
    canvas.appendChild(el);
  });
}

plotBars();
transitionTime =
  Number.parseFloat(getComputedStyle(bars[0]).transitionDuration) * 1000;
startSort(0);

let cards = document.querySelector(".cards");
let index = 3;
setInterval(function () {
  let content = cards.querySelectorAll(".card");
  content[0].classList = "card second";
  content[1].classList = "card third";
  content[2].querySelector(".sort-icon").innerHTML = sorts[index].image;
  content[2].querySelector(".sort-name").textContent = sorts[index].sortName;
  index = (index + 1) % sorts.length;
  cards.insertBefore(content[2], content[0]);
  content[2].classList = "card";
}, 5000);

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: "Time",
        data: [0, 4, 8, 16],
        borderColor: "#ffd061",
        borderWidth: 2,
        fill: false,
        lineTension: 0.3,
      },
      {
        label: "Space",
        data: [16, 8, 4, 0],
        borderColor: "#36a3ea",
        borderWidth: 2,
        fill: false,
        lineTension: 0.3,
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "ease",
    },
  },
});
