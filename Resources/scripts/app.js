'use strict'


const canvas = document.querySelector('.bars');
const sizeBar = document.getElementById('size-slider');
const speedBar = document.getElementById('speed-slider');
const sortBtn = document.getElementById('sort-btn');
const MAXIMUM_ARRAY_SIZE = 100
const FONT_SIZE_LIMIT = 7
const base = 5;
const timeBetweenFrames = 25;
function createRandomData(size){
  data = [];
  for (let i = 0; i < size; i++) {
    data.push(Number.parseInt(Math.random()*MAXIMUM_ARRAY_SIZE) + 1);
  }
}
function plotBars(){
  canvas.innerHTML = '';
  canvas.style["font-size"] = `${MAXIMUM_ARRAY_SIZE / Math.max(FONT_SIZE_LIMIT, data.length) + 4}px`;
  canvas.style["gap"] = `${MAXIMUM_ARRAY_SIZE / data.length}px`;
  canvas.style["grid-template-columns"] = `repeat(${data.length}, minmax(0, 1fr))`;
  let height = canvas.getBoundingClientRect().height;
  let maxValue = Math.max(...data);
  data.forEach((value, index)=>{
    let el = document.createElement('div');
    el.classList.add('bar');
    el.setAttribute('id', `bar${index}`);
    el.setAttribute('data-value', value);
    el.style.height = `${(value/maxValue) * height}px`;
    canvas.appendChild(el);
  })
  bars = canvas.querySelectorAll('.bar');
  
}


let data = []
let bars = canvas.querySelectorAll('.bar');
let animationQueue = []
let transitionTime;
let timeGap = 100;
createRandomData(updateSize());
plotBars();
updateTime();






function updateSize(){
    let size = Number.parseInt((MAXIMUM_ARRAY_SIZE - base) * Number.parseInt(sizeBar.value)/100) + base;
    if (size != data.length){
      createRandomData(size);
      plotBars();
    }
    return size;
}

function updateTime(){
  if (2000 - Number.parseInt(speedBar.value)/100 * 1900 != transitionTime){
    transitionTime = 2000 - Number.parseInt(speedBar.value)/100 * 1900;
    bars.forEach(el => {el.style.transitionDuration = `${(transitionTime/1000).toFixed(2)}s`;});
  }
  return transitionTime;
}

sizeBar.addEventListener('mousedown',function(){
  updateSize();
  const changeInterval = setInterval(updateSize, timeBetweenFrames);
  const clearer = function(){
    clearInterval(changeInterval);
    sizeBar.removeEventListener('mouseup', clearer);
  }
  sizeBar.addEventListener('mouseup', clearer);
});


speedBar.addEventListener('mousedown',function(){
    updateTime();
    const changeInterval = setInterval(updateTime, timeBetweenFrames);
    const clearer = function(){
        clearInterval(changeInterval);
        speedBar.removeEventListener('mouseup', clearer);
    }
    speedBar.addEventListener('mouseup', clearer);
});



 function swapTwoBars(index1, index2){
    let first = bars[index1];
    let second = bars[index2];
    let x1 = first.getBoundingClientRect().x;
    let x2 = second.getBoundingClientRect().x;
    first.style.transform = `translateX(${x2 - x1}px)`;
    second.style.transform = `translateX(${x1 - x2}px)`;
    console.log(first.style);
    let swapInCanvas = function(){
      canvas.insertBefore(second, first);
      canvas.insertBefore(first, second.nextSibling);
      first.style.transform = null;
      second.style.transform = null;
      bars = canvas.querySelectorAll('.bar');
      this.removeEventListener('transitionend', swapInCanvas);
  }
    first.addEventListener('transitionend', swapInCanvas);
    }



function bblSort() {
    for (let i = 0; i < bars.length; i++) {
  
        // Last i elements are already in place  
        for (let j = 0; j < (bars.length - i - 1); j++) {
            // Checking if the item at present iteration 
            // is greater than the next iteration
            animationQueue.push(function(){
              bars[j].style.backgroundColor = 'var(--wrong)';
              bars[j+1].style.backgroundColor = 'var(--wrong)';
            if (bars[j + 1].getBoundingClientRect().height < bars[j].getBoundingClientRect().height) {
                    swapTwoBars(j, j+1);
            }
            setTimeout(() => {
              bars[j].style.backgroundColor = 'var(--normal)';
              bars[j + 1].style.backgroundColor = 'var(--normal)';
              if (j + 1 == (bars.length - i - 1)){
                bars[bars.length - i - 1].style.backgroundColor = 'var(--correct)';
              }
            }, transitionTime + timeGap/2);
            
          })
          
        }
      }
      animationQueue.push(function(){
        setTimeout(() => {
          bars[0].style.backgroundColor = 'var(--correct)';
        }, transitionTime);
      });
}
// bblSort();


// let i = 0;
// const animation = setInterval(() => {
//     if (i >= animationQueue.length)
//         this.clearInterval();
//     else
//         animationQueue[i++]();
// }, transitionTime + timeGap);






sortBtn.addEventListener('click', function(){
  console.log(transitionTime);
  console.log(bars[0].style.transitionDuration);
  console.log(bars);
  animationQueue = [];
  bblSort();
  let i = 0;
  const animation = setInterval(() => {
      if (i >= animationQueue.length)
          clearInterval(animation);
      else
          animationQueue[i++]();
  }, transitionTime + timeGap);


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
              data: [16, 8, 4,   0],
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
      
