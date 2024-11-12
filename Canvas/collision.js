const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

let gravity = 1;
let friction = 0.9;

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

addEventListener("click", function(){
  init();
})

//Utility functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

// Objects
function Ball(x, y, dx, dy, radius, color) {
  this.x = x
  this.y = y
  this.dx = dx;
  this.dy = dy;
  this.radius = radius
  this.color = color
  // let collisionRadius = 100;

  this.draw = function () {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill();
    c.stroke();
    c.closePath();

    // c.beginPath();
    // c.arc(innerWidth /2 , innerHeight / 2, 200, 0, Math.PI * 2, false)
    // c.fillStyle = "black";
    // c.fill();
    // c.closePath();

    
    // c.beginPath();
    // c.arc(innerWidth /2 , innerHeight / 2, collisionRadius, 0, Math.PI * 2, false)
    // c.fillStyle = "black";
    // c.fill();
    // c.closePath();
  }

  this.update = function () {

    // let distance = Math.sqrt(Math.pow((innerWidth/2)-this.x, 2) + Math.pow((innerHeight/2)-this.y, 2));
    // if(distance <= (this.radius+collisionRadius)){
    //   this.dy = - this.dy * friction;
    //   this.dx = -this.dx ;
    // }

    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
    }
    else {
      this.dy += gravity;
    }

    if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius<= 0) {
      this.dx = -this.dx * friction*friction;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw()
  }
}

let ball;
let ballArray = [];
function init() {
  ballArray = [];
  for (let i = 0; i < 100; i++) {
    let radius = randomIntFromRange(8,30);
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);
    let dx = randomIntFromRange(-2, 2);
    let dy = randomIntFromRange(-2, 2);
    let colour = randomColor(colors);
    ballArray.push(new Ball(x, y, dx, dy, radius, colour));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].update()
  }


}

init()
animate()