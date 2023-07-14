const sorts = [
  {
    sortName: "Bubble Sort",
    image: `<svg fill="#000000" height="800px" width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 363.188 363.188" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 363.188 363.188">
    <g>
      <path d="m111.667,132.311c-61.574,0-111.667,50.093-111.667,111.666s50.093,111.667 111.667,111.667 111.667-50.094 111.667-111.667-50.094-111.666-111.667-111.666zm0,208.333c-53.303,0-96.667-43.364-96.667-96.667 0-53.302 43.364-96.666 96.667-96.666s96.667,43.364 96.667,96.666c-0.001,53.303-43.365,96.667-96.667,96.667z"/>
      <path d="m111.667,173.977c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5 7.5,7.5c30.327,0 55,24.673 55,55 0,4.143 3.358,7.5 7.5,7.5s7.5-3.357 7.5-7.5c0-38.598-31.402-70-70-70z"/>
      <path d="m298.333,69.835c-35.761,0-64.855,29.094-64.855,64.855 0,35.761 29.094,64.854 64.855,64.854s64.855-29.094 64.855-64.854c-5.68434e-14-35.761-29.093-64.855-64.855-64.855zm0,114.71c-27.49,0-49.855-22.364-49.855-49.854s22.365-49.855 49.855-49.855 49.855,22.365 49.855,49.855-22.364,49.854-49.855,49.854z"/>
      <path d="m302.012,157.925c-14.84,0-26.913-12.073-26.913-26.913 0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,23.111 18.802,41.913 41.913,41.913 4.142,0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"/>
      <path d="m123.358,96.568c24.544,0 44.512-19.968 44.512-44.512s-19.968-44.512-44.512-44.512-44.512,19.968-44.512,44.512 19.968,44.512 44.512,44.512zm0-74.024c16.273,3.55271e-15 29.512,13.239 29.512,29.512s-13.239,29.512-29.512,29.512-29.512-13.239-29.512-29.512 13.239-29.512 29.512-29.512z"/>
    </g>
    </svg>`,
    sortFunction: bblSort,
    containsGap: true,
  },

  {
    sortName: "Merge Sort",
    image: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32.4 97.2c28-12.4 47.6-40.5 47.6-73.2c0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3V358.7C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V272c26.7 20.1 60 32 96 32h86.7c12.3 28.3 40.5 48 73.3 48c44.2 0 80-35.8 80-80s-35.8-80-80-80c-32.8 0-61 19.7-73.3 48H208c-49.9 0-91-38.1-95.6-86.8zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM344 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>`,
    sortFunction: mergeSort,
    containsGap: false,
  },

  {
    sortName: "Insertion Sort",
    image: `<svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .cls-1 {
        fill: none;
      }
    </style>
  </defs>
  <title>insert--page</title>
  <path d="M26,30H24V20H12V30H10V20a2.0021,2.0021,0,0,1,2-2H24a2.0021,2.0021,0,0,1,2,2Z"/>
  <polygon points="5.17 16 2 19.17 3.411 20.589 8 16 3.42 11.42 2 12.83 5.17 16"/>
  <path d="M24,14H12a2.0021,2.0021,0,0,1-2-2V2h2V12H24V2h2V12A2.0021,2.0021,0,0,1,24,14Z"/>
  <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
  </svg>`,
    containsGap: true,
  },

  {
    sortName: "Selection Sort",
    image: `<svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
  width="800px" height="800px" viewBox="0 0 32 32" xml:space="preserve">
  <path class="puchipuchi_een" d="M7,6c0-2.757,2.243-5,5-5s5,2.243,5,5c0,1.627-0.793,3.061-2,3.974V6c0-1.654-1.346-3-3-3
  S9,4.346,9,6v3.974C7.793,9.061,7,7.627,7,6z M24,13c-1.104,0-2,0.896-2,2v-1c0-1.104-0.896-2-2-2s-2,0.896-2,2v-1
  c0-1.104-0.896-2-2-2s-2,0.896-2,2V6c0-1.104-0.896-2-2-2s-2,0.896-2,2v10.277C9.705,16.106,9.366,16,9,16c-1.104,0-2,0.896-2,2v3
  c0,0.454,0.155,0.895,0.438,1.249L11,28h12l2.293-3.293C25.682,24.318,26,23.55,26,23v-8C26,13.896,25.104,13,24,13z M11,29v1
  c0,0.552,0.447,1,1,1h10c0.553,0,1-0.448,1-1v-1H11z"/>
  </svg>`,
    sortFunction: selectionSort,
    containsGap: true,
  },
];

function swapTwoBars(index1, index2) {
  let first = bars[index1];
  let second = bars[index2];
  let secondNextSibiling = second.nextSibling;
  let x1 = first.getBoundingClientRect().x;
  let x2 = second.getBoundingClientRect().x;
  first.style.transform = `translateX(${x2 - x1}px)`;
  second.style.transform = `translateX(${x1 - x2}px)`;
  let swapInCanvas = function () {
    canvas.insertBefore(second, first);
    canvas.insertBefore(first, secondNextSibiling);
    first.style.transform = null;
    second.style.transform = null;
    this.removeEventListener("transitionend", swapInCanvas);
  };
  first.addEventListener("transitionend", swapInCanvas);
}

function bblSort() {
  for (let i = 0; i < bars.length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < bars.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      animationQueue.push(function () {
        bars[j].style.backgroundColor = "var(--wrong)";
        bars[j + 1].style.backgroundColor = "var(--wrong)";
        if (
          Number.parseInt(bars[j + 1].dataset.value) <
          Number.parseInt(bars[j].dataset.value)
        ) {
          swapTwoBars(j, j + 1);
        }
        setTimeout(() => {
          bars[j].style.backgroundColor = "var(--normal)";
          bars[j + 1].style.backgroundColor = "var(--normal)";
          if (j + 1 == bars.length - i - 1) {
            bars[bars.length - i - 1].style.backgroundColor = "var(--correct)";
          }
        }, transitionTime + timeGap / 2);
      });
    }
  }
  animationQueue.push(function () {
    setTimeout(() => {
      bars[0].style.backgroundColor = "var(--correct)";
    }, transitionTime);
  });
}

function selectionSort() {
  for (let i = 0; i < bars.length; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < bars.length; j++) {
      animationQueue.push(function () {
        bars[j].style.backgroundColor = "var(--wrong)";
        bars[min].style.backgroundColor = "var(--wrong)";
        setTimeout(function () {
          if (
            Number.parseInt(bars[j].dataset.value) <
            Number.parseInt(bars[min].dataset.value)
          ) {
            bars[min].style.backgroundColor = "var(--normal)";
            min = j;
          }
          bars[j].style.backgroundColor = "var(--normal)";
        }, transitionTime);
      });
    }
    animationQueue.push(function () {
      if (min != i) {
        swapTwoBars(i, min);
        // Swapping the elements
      }
      setTimeout(function () {
        bars[i].style.backgroundColor = "var(--correct)";
      }, transitionTime + timeGap);
    });
  }
  return bars;
}

function insertAnimation(bar, bar2, insertPosition, color) {
  animationQueue.push(function () {
    bar2.style.backgroundColor = "var(--wrong)";
    bar.style.backgroundColor = `var(--wrong)`;
    setTimeout(function () {
      canvas.insertBefore(bar, bars[insertPosition]);
      setTimeout(function () {
        bar2.style.backgroundColor = "var(--normal)";
        bar.style.backgroundColor = `var(--${color})`;
      }, transitionTime * 0.3);
    }, transitionTime * 0.5);
  });
}

function changePos(bar, destinationIndex) {
  delete array[array.indexOf(bar)];
  array = [
    ...array.slice(0, destinationIndex),
    bar,
    ...array.slice(destinationIndex, array.length),
  ];
  array = array.filter((el) => el != undefined);
}

function merge_Arrays(left, mid, right, finalMerge) {
  let color = finalMerge ? "correct" : "normal";
  let subArrayOne = mid - left + 1;
  let subArrayTwo = right - mid;

  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < subArrayOne; i++) leftArray.push(array[left + i]);
  for (let j = 0; j < subArrayTwo; j++) rightArray.push(array[mid + 1 + j]);

  let indexOfSubArrayOne = 0;
  let indexOfSubArrayTwo = 0;
  let indexOfMergedArray = left;

  while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo) {
    if (
      Number.parseInt(leftArray[indexOfSubArrayOne].dataset.value) <=
      Number.parseInt(rightArray[indexOfSubArrayTwo].dataset.value)
    ) {
      changePos(leftArray[indexOfSubArrayOne], indexOfMergedArray);
      insertAnimation(
        leftArray[indexOfSubArrayOne],
        rightArray[indexOfSubArrayTwo],
        indexOfMergedArray,
        color
      );
      indexOfSubArrayOne++;
    } else {
      changePos(rightArray[indexOfSubArrayTwo], indexOfMergedArray);
      insertAnimation(
        rightArray[indexOfSubArrayTwo],
        leftArray[indexOfSubArrayOne],
        indexOfMergedArray,
        color
      );
      indexOfSubArrayTwo++;
    }
    indexOfMergedArray++;
  }
  if (finalMerge) {
    while (indexOfSubArrayOne < subArrayOne) {
      changePos(leftArray[indexOfSubArrayOne], indexOfMergedArray);
      insertAnimation(
        leftArray[indexOfSubArrayOne],
        leftArray[indexOfSubArrayOne],
        indexOfMergedArray,
        color
      );
      indexOfSubArrayOne++;
      indexOfMergedArray++;
    }

    while (indexOfSubArrayTwo < subArrayTwo) {
      changePos(rightArray[indexOfSubArrayTwo], indexOfMergedArray);
      insertAnimation(
        rightArray[indexOfSubArrayTwo],
        rightArray[indexOfSubArrayTwo],
        indexOfMergedArray,
        color
      );
      indexOfSubArrayTwo++;
      indexOfMergedArray++;
    }
  }
}

function merge_sort(begin, end, finalMerge) {
  if (begin >= end) return;
  let mid = Math.floor(begin + (end - begin) / 2);
  merge_sort(begin, mid, false);
  merge_sort(mid + 1, end, false);
  merge_Arrays(begin, mid, end, finalMerge);
}
let array = [];
function mergeSort() {
  array = [...bars];
  merge_sort(0, bars.length - 1, true);
}

function startSort(sortIndex) {
  animationQueue = [];
  sorts[sortIndex].sortFunction();
  let i = 0;
  const animation = setInterval(() => {
    if (i >= animationQueue.length) {
      clearInterval(animation);
      animationQueue = [];
      controlsOff = false;
      toggleControls(controlsOff);
    } else animationQueue[i++]();
  }, transitionTime + (sorts[sortIndex].containsGap ? timeGap : 0));
}
