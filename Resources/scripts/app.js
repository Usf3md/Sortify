let canvas = document.querySelector('.bars');


const MAXIMUM_ARRAY_SIZE = 100
const FONT_SIZE_LIMIT = 7
let data = []

for (let i = 0; i < 15; i++) {
    data.push(Number.parseInt(Math.random()*MAXIMUM_ARRAY_SIZE) + 1);
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
  
}

plotBars();




let animationQueue = []


let bars = canvas.querySelectorAll('.bar');
let transitionTime = Number.parseFloat(getComputedStyle(bars[0]).transitionDuration) * 1000;
let timeGap = 100;


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
bblSort();


let i = 0;
const animation = setInterval(() => {
    if (i >= animationQueue.length)
        this.clearInterval();
    else
        animationQueue[i++]();
}, transitionTime + timeGap);








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
      
