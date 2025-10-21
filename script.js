// Constants
const obstacles = [];
const rows = 9;
const WIDTH = 500;
const HEIGHT = 500;
const obstacleSpacing = 38;
const obstacleRadius = 4;
const DECIMAL_MULTIPLIER = 1000;

// get canvas and create instance
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;

//  padding & unpadding
function pad(n) {
    return n * DECIMAL_MULTIPLIER;
}
function unpad(n) {
    return Math.floor(n / DECIMAL_MULTIPLIER);
}

// Creating obstacles
for (let row = 2; row <= rows; row++) {
    const numOfObstacles = row + 1;
    // y & x pos
    const y = row * 40;
    for (let col = 0; col < numOfObstacles; col++) {
        const x = WIDTH / 2 - obstacleSpacing * (row / 2 - col);
        obstacles.push({ x: pad(x), y: pad(y), radius: obstacleRadius });
    }
}

// draw obstacles
function drawObstacles() {
    ctx.fillStyle = 'black';
    obstacles.forEach((obs) => {
        ctx.beginPath();
        ctx.arc(unpad(obs.x), unpad(obs.y), obs.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    })
}

// draw on canvas
function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawObstacles();
}

function main() {
    draw();
    requestAnimationFrame(main);
}
main();