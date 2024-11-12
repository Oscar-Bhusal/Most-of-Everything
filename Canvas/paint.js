const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight / 1.3;
const smallBtn = document.querySelector('.small-btn');
const largeBtn = document.querySelector('.large-btn');
const mediumBtn = document.querySelector('.medium-btn');
const choosed = document.querySelector('.choosed');
const redBtn = document.querySelector('.red-btn');
const greenBtn = document.querySelector('.green-btn');
const blueBtn = document.querySelector('.blue-btn');
const yellowBtn = document.querySelector('.yellow-btn');
const blackBtn = document.querySelector('.black-btn');
const whiteBtn = document.querySelector('.white-btn');
const aquaBtn = document.querySelector('.aqua-btn');
const pinkBtn = document.querySelector('.pink-btn');
const purpleBtn = document.querySelector('.purple-btn');
const orangeBtn = document.querySelector('.orange-btn');
const greyBtn = document.querySelector('.grey-btn');
const indigoBtn = document.querySelector('.indigo-btn');
const resetBtn = document.querySelector('.reset-btn');
let BrushArray = [];
let size;
let color;

let mouse = {
  x: undefined,
  y: undefined
}

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // console.log(mouse.x, mouse.y);
  BrushArray.push(new Brush());
});

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 1.3;
})

size = 8;
color = "black";
choosed.style.background = "black";

smallBtn.addEventListener("click", () => {
  size = 8;
  choosed.style.width = "20px";
  choosed.style.height = "20px";
})
largeBtn.addEventListener("click", () => {
  size = 24;
  choosed.style.width = "60px";
  choosed.style.height = "60px";
})
mediumBtn.addEventListener("click", () => {
  size = 16;
  choosed.style.width = "40px";
  choosed.style.height = "40px";
})
redBtn.addEventListener("click", () => {
  color = "red";
  choosed.style.background = "red";
});
greenBtn.addEventListener("click", () => {
  color = "green";
  choosed.style.background = "green";
});
blueBtn.addEventListener("click", () => {
  color = "blue";
  choosed.style.background = "blue";
});
yellowBtn.addEventListener("click", () => {
  color = "yellow";
  choosed.style.background = "yellow";
});
blackBtn.addEventListener("click", () => {
  color = "black";
  choosed.style.background = "black";
});
whiteBtn.addEventListener("click", () => {
  color = "white";
  choosed.style.background = "white";
});
aquaBtn.addEventListener("click", () => {
  color = "aqua";
  choosed.style.background = "aqua";
});
pinkBtn.addEventListener("click", () => {
  color = "pink";
  choosed.style.background = "pink";
});
purpleBtn.addEventListener("click", () => {
  color = "purple";
  choosed.style.background = "purple";
});
orangeBtn.addEventListener("click", () => {
  color = "orange";
  choosed.style.background = "orange";
});
greyBtn.addEventListener("click", () => {
  color = "grey";
  choosed.style.background = "grey";
});
indigoBtn.addEventListener("click", () => {
  color = "indigo";
  choosed.style.background = "indigo";
});



class Brush {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = size;
    this.color = color;
  }

  draw() {
    c.fillStyle = this.color;
    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    c.fill();
  }
}

function handleBrush() {
  for (let i = 0; i < BrushArray.length; i++) {
    BrushArray[i].draw();
  }
}

function animate() {
  resetBtn.addEventListener('click', () => {
    BrushArray = [];
    c.clearRect(0, 0, canvas.width, canvas.height);
  });
  handleBrush();
  requestAnimationFrame(animate);
}

animate();
