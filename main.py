data = """:root {
  --primary: #f6f6f6;
  --grey: #757575;
  --normal: rgba(153, 102, 255, 0.6);
  --correct: rgba(77, 193, 75, 0.6);
  --wrong: rgba(254, 99, 133, 0.6);

  --pink: #fe6385;
  --yellow: #ffd061;
  --blue: #36a3ea;
  --green: #4dc14b;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

/* Global Styles */
body {
  font-family: "Rubik", sans-serif;
  background-color: var(--primary);
}
.pad {
  padding: 1.5rem;
}

.font-rowdies {
  font-family: "Rowdies", sans-serif;
}

.font-grey {
  color: var(--grey);
}
.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 1rem;
  width: 3rem;
}

.logo ~ p {
  font-size: 1.5rem;
}

header {
  height: 100vh;
  position: relative;
}

.headline {
  position: absolute;
  top: 50%;
  transform: translatey(-50%);
}

h1 {
  font-size: 2.5rem;
  margin: 0 0 1.5rem 0;
}

h1 ~ p {
  font-size: 1.3rem;
  margin-bottom: 5rem;
}

.get-started-btn {
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-size: 1.3rem;
  background-color: #4bc1c1;
  border-radius: 4px;
  padding: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: background-color 0.15s;
}
.get-started-btn:hover {
  background-color: #42a8a8;
}

.bars-container {
  position: absolute;
  transform: scale(1, -1);
  bottom: 0;
  right: 10rem;
  /* filter: blur(10px); */
  /* width: 30rem; */
}

.bars {
  width: 30rem;
}

.bar {
  background-color: var(--normal);
  height: 1rem;
  border-radius: 0 0 4px 4px;
  position: relative;
  transition: transform ease 1s;
}
.bar:nth-child(odd) {
  background-color: var(--correct);
}
/* 
#bar1 {
  height: 2.9rem;
}
#bar2 {
  height: 20rem;
}
#bar3 {
  height: 16rem;
}
#bar4 {
  height: 7.5rem;
}
#bar5 {
  height: 31rem;
}
#bar6 {
  height: 22.5rem;
}
#bar7 {
  height: 19.2rem;
}
#bar8 {
  height: 11.4rem;
} */

header::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 20px;
  transform: translatey(100%);
  bottom: -2px;
  left: 0;
  background-color: var(--primary);
  z-index: 0px;
}

.section-1 {
  border-top: 2px solid #cdcdcd;
  z-index: 10px;
}

h2 {
  font-size: 1.7rem;
  text-align: center;
  margin-top: 3.5rem;
}

.feature {
  margin: 12rem 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-items: center;
  align-items: center;
  column-gap: 2rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
h3 ~ p {
  font-size: 1.15rem;
}

.explain .icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.feature:nth-child(1) .explain .icon-container {
  color: var(--pink);
}
.feature:nth-child(2) .explain .icon-container {
  color: var(--yellow);
}
.feature:nth-child(3) .explain .icon-container {
  color: var(--blue);
}
.feature:nth-child(4) .explain .icon-container {
  color: var(--green);
}

.swiper {
  background-color: white;
  width: 18rem;
  height: 18rem;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
}

.swiper .sort-icon svg {
  width: 9rem;
  height: 9rem;
  fill: var(--pink);
}

.swiper .cards {
  display: flex;
  width: 36rem;
  height: 18rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
  left: -9rem;
}
.swiper .sort-name {
  font-size: 1.3rem;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 80%;
  transition: transform ease 1s;
  position: absolute;
}

.second {
  transform: translateX(13.5rem);
}
.third {
  transform: translateX(27rem);
}

.bg-yellow {
  background-color: var(--yellow);
}

.bg-blue {
  background-color: var(--blue);
}
.sliders {
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.slider {
  width: 20rem;
  height: 0.7rem;
  border-radius: 1rem;
  position: relative;
}

.slider:nth-child(1) {
  margin-bottom: 4rem;
}

.slider::after {
  content: "";
  position: absolute;
  width: 1.1rem;
  height: 1.1rem;
  background-color: white;
  top: 0;
  left: 0;
  border-radius: 50%;
}

@keyframes slide-right {
  0%,
  70% {
    transform: translate(calc(-50% + 3.5rem), calc(-50% + 0.35rem));
  }
  20%,
  50% {
    transform: translate(calc(-50% + 16.5rem), calc(-50% + 0.35rem));
  }
}
.slider.bg-yellow::after {
  transform: translate(calc(-50% + 3.5rem), calc(-50% + 0.35rem));
  animation: slide-right 8s ease 0.5s infinite;
}

.slider.bg-yellow::before {
  content: "";
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: var(--yellow);
  top: 0;
  left: 0;
  border-radius: 50%;
  transform: translate(calc(-50% + 3.5rem), calc(-50% + 0.35rem));
  animation: slide-right 8s ease 0.5s infinite;
}

@keyframes slide-left {
  0%,
  70% {
    transform: translate(calc(-50% + 16.5rem), calc(-50% + 0.35rem));
  }
  20%,
  50% {
    transform: translate(calc(-50% + 3.5rem), calc(-50% + 0.35rem));
  }
}

.slider.bg-blue::after {
  transform: translate(calc(-50% + 16.5rem), calc(-50% + 0.35rem));
  animation: slide-left 8s ease 0.5s infinite;
}
.slider.bg-blue::before {
  content: "";
  position: absolute;
  width: 2rem;
  height: 2rem;
  background-color: var(--blue);
  top: 0;
  left: 0;
  border-radius: 50%;
  transform: translate(calc(-50% + 16.5rem), calc(-50% + 0.35rem));
  animation: slide-left 8s ease 0.5s infinite;
}

.graph {
  width: 35rem;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
"""


while (True):
    i = data.find("rem")
    if (i == -1):
        break
    j = i
    while (data[j - 1].isdigit() or data[j - 1] == '.'):
        j -= 1
    print(data[j:i])
    num = float(data[j:i])
    num *= 1.6
    num = round(num, 2)
    data = data.replace(data[j:i+3], str(num)+"FEM")


print(data)
