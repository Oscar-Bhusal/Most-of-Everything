const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];
let hue = 0;

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const mouse = {
    x: undefined,
    y: undefined
}
canvas.addEventListener("click", function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    for (let i = 0; i < 20; i++) {
        particleArray.push(new Particle());
    }
});

canvas.addEventListener("mousemove", function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
    for (let i = 0; i < 5; i++) {
        particleArray.push(new Particle());
    }
});

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue} , 100% , 50%)`;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) {
            this.size -= 0.1;
        }
    }
    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        c.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();

        for (let j = i; j < particleArray.length; j++) {
            const dx = Math.abs(particleArray[i].x - particleArray[j].x);
            const dy = Math.abs(particleArray[j].y - particleArray[j].y);
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 30) {
                c.beginPath();
                c.strokeStyle = particleArray[i].color;
                c.lineWidth = 0.3;
                c.moveTo(particleArray[i].x, particleArray[i].y)
                c.lineTo(particleArray[j].x, particleArray[j].y)
                c.stroke();
                c.closePath();
            }
        }

        if (particleArray[i].size <= 0.3) {
            particleArray.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    c.clearRect(0, 0, innerWidth, innerHeight);
    // c.fillStyle = "rgba(0,0,0,0.05)";
    // c.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue++;
    requestAnimationFrame(animate);
}

animate();