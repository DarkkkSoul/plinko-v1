// Constants
const WIDTH = 500;
const HEIGHT = 500;
const DECIMAL_MULTIPLIER = 1000;

const rows = 9;
const obstacleSpacing = 38;
const obstacleRadius = 4;

const SINK_NUM = 9;
const sinkWidth = 38;

const obstacles = [];
const sinks = [];

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

//  Creating sinks
for (let i = 0; i < SINK_NUM; i++) {
    const x = WIDTH / 2 + (i - SINK_NUM / 2) * sinkWidth + obstacleRadius;
    const y = HEIGHT - 99;
    const width = sinkWidth;
    const height = width;
    sinks.push({ x, y, width, height });
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

// draw sinks
function drawSinks() {
    ctx.fillStyle = "red";
    for (let i = 0; i < sinks.length; i++) {
        const sink = sinks[i];
        ctx.fillRect(sink.x, sink.y - sink.height / 2, sink.width - obstacleRadius * 2, sink.height);
    }
}

// draw on canvas
function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawObstacles();
    drawSinks();
}

function main() {
    draw();
    requestAnimationFrame(main);
}
main();