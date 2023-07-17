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
const sortButtonState = document.getElementById("state");
const randomizeBtn = document.getElementById("randomize-btn");
const MAXIMUM_ARRAY_SIZE = 100;
const MAXIMUM_TRANSITION_TIME = 1000;
const FONT_SIZE_LIMIT = 0.3;
const BASE_SIZE = 5;
const BASE_TIME = 20;
const timeBetweenFrames = 15;
let transitionTime;
let timeGap = 100;
let animationQueue = [];
sizeBar.value = 16;

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
  canvas.style["font-size"] = `${Math.max(
    1 - size / MAXIMUM_ARRAY_SIZE,
    FONT_SIZE_LIMIT
  )}rem`;
  canvas.style["gap"] = `${MAXIMUM_ARRAY_SIZE / size}px`;
  canvas.style["grid-template-columns"] = `repeat(${size}, minmax(0, 1fr))`;
  let maxValue = Math.max(...data);
  data.forEach((value, index) => {
    let el = document.createElement("div");
    el.classList.add("bar");
    el.setAttribute("id", `bar${index}`);
    el.setAttribute("data-value", value);
    el.style.height = `${(value / maxValue) * 100}%`;
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

sizeBar.addEventListener("pointerdown", function () {
  updateSize();
  const changeInterval = setInterval(updateSize, timeBetweenFrames);
  const clearer = function () {
    clearInterval(changeInterval);
    sizeBar.removeEventListener("pointerup", clearer);
  };
  sizeBar.addEventListener("pointerup", clearer);
});

randomizeBtn.addEventListener("click", function () {
  updateSize(true);
});

speedBar.addEventListener("pointerdown", function () {
  updateTime();
  const changeInterval = setInterval(updateTime, timeBetweenFrames);
  const clearer = function () {
    clearInterval(changeInterval);
    speedBar.removeEventListener("pointerup", clearer);
  };
  speedBar.addEventListener("pointerup", clearer);
});

function toggleControls(state) {
  sizeBar.disabled = state;
  speedBar.disabled = state;
  sortDDL.disabled = state;
  randomizeBtn.disabled = state;
  sizeBar.classList.toggle("disabled", state);
  speedBar.classList.toggle("disabled", state);
  sortDDL.classList.toggle("disabled", state);
  sortBtn.classList.toggle("stop-button", state);
  sortButtonState.textContent = state ? "STOP" : "SORT";
  randomizeBtn.classList.toggle("disabled", state);
}

let controlsOff = false;
let canceled = false;
sortBtn.addEventListener("click", function () {
  if (controlsOff == true) {
    canceled = true;
  } else {
    controlsOff = true;
    toggleControls(controlsOff);
    startSort(Number.parseInt(sortDDL.value));
  }
});

var timeChart = document.getElementById("timeChart").getContext("2d");
var Tchart = new Chart(timeChart, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Time",
        data: [],
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
var Schart = new Chart(spaceChart, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Space",
        data: [],
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

const hamburgerButton = document.getElementById("more-options");
const functions = document.getElementsByClassName("functions-container")[0];
hamburgerButton.addEventListener("click", function () {
  let brgr = hamburgerButton.getElementsByTagName("i")[0];
  let show = brgr.classList.contains("fa-xmark");
  brgr.classList.toggle("fa-xmark", !show);
  brgr.classList.toggle("fa-bars", show);

  functions.classList.toggle("slide", !show);
});
