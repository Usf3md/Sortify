"use strict";

const sortDDL = document.getElementById("sorting-alogrithms");
function createDDL() {
  sortDDL.innerHTML = "";
  sorts.forEach((value, index) => {
    let el = document.createElement("option");
    el.setAttribute("value", index);
    el.insertAdjacentHTML("afterbegin", `<span>${value.sortName}</span>`);
    sortDDL.appendChild(el);
  });
}
createDDL();

const canvas = document.querySelector(".bars");
const bars = canvas.childNodes;
const sizeBar = document.getElementById("size-slider");
const speedBar = document.getElementById("speed-slider");
const sortBtn = document.getElementById("sort-btn");
const randomizeBtn = document.getElementById("randomize-btn");
const MAXIMUM_ARRAY_SIZE = 100;
const MAXIMUM_TRANSITION_TIME = 1000;
const FONT_SIZE_LIMIT = 7;
const BASE_SIZE = 5;
const BASE_TIME = 20;
const timeBetweenFrames = 15;
let transitionTime;
let timeGap = 100;
let animationQueue = [];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function plotBars(size) {
  let data = [];
  for (let i = 1; i <= size; i++) {
    data.push(i);
  }
  data = shuffle(data);
  canvas.innerHTML = "";
  canvas.style["font-size"] = `${
    MAXIMUM_ARRAY_SIZE / Math.max(FONT_SIZE_LIMIT, size) + 4
  }px`;
  canvas.style["gap"] = `${MAXIMUM_ARRAY_SIZE / size}px`;
  canvas.style["grid-template-columns"] = `repeat(${size}, minmax(0, 1fr))`;
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
  updateTime(true);
}

function updateSize(forceUpdate) {
  let size =
    Number.parseInt(
      ((MAXIMUM_ARRAY_SIZE - BASE_SIZE) * Number.parseInt(sizeBar.value)) / 100
    ) + BASE_SIZE;
  if (size != bars.length || forceUpdate) {
    plotBars(size);
  }
  return size;
}

function updateTime(forceUpdate) {
  let temp =
    MAXIMUM_TRANSITION_TIME -
    (Number.parseInt(speedBar.value) / 100) *
      (MAXIMUM_TRANSITION_TIME - BASE_TIME);
  if (temp != transitionTime || forceUpdate) {
    transitionTime = temp;
    bars.forEach((el) => {
      el.style.transitionDuration = `${(transitionTime / 1000).toFixed(2)}s`;
    });
  }
  return transitionTime;
}

updateSize(true);
updateTime(true); // not needed but why not :)

sizeBar.addEventListener("mousedown", function () {
  updateSize();
  const changeInterval = setInterval(updateSize, timeBetweenFrames);
  const clearer = function () {
    clearInterval(changeInterval);
    sizeBar.removeEventListener("mouseup", clearer);
  };
  sizeBar.addEventListener("mouseup", clearer);
});

randomizeBtn.addEventListener("click", function () {
  updateSize(true);
});

speedBar.addEventListener("mousedown", function () {
  updateTime();
  const changeInterval = setInterval(updateTime, timeBetweenFrames);
  const clearer = function () {
    clearInterval(changeInterval);
    speedBar.removeEventListener("mouseup", clearer);
  };
  speedBar.addEventListener("mouseup", clearer);
});

function toggleControls(state) {
  sizeBar.disabled = state;
  speedBar.disabled = state;
  sortDDL.disabled = state;
  randomizeBtn.disabled = state;
  sortBtn.disabled = state;
  sizeBar.classList.toggle("disabled", state);
  speedBar.classList.toggle("disabled", state);
  sortDDL.classList.toggle("disabled", state);
  sortBtn.classList.toggle("disabled", state);
  randomizeBtn.classList.toggle("disabled", state);
}

let controlsOff = false;
sortBtn.addEventListener("click", function () {
  controlsOff = true;
  toggleControls(controlsOff);
  startSort(Number.parseInt(sortDDL.value));
});

var timeChart = document.getElementById("timeChart").getContext("2d");
var chart = new Chart(timeChart, {
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
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "ease",
    },
  },
});

var spaceChart = document.getElementById("spaceChart").getContext("2d");
var chart = new Chart(spaceChart, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4],
    datasets: [
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
