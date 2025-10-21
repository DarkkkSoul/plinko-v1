// Constants
const obstacles = [];
const rows = 5;
const WIDTH = 500;
const HEIGHT = 500;
const obstacleSpacing = 30;
const obstacleRadius = 4;

// get canvas and create instance
const canvas = document.getElementById(canvas);
const ctx = canvas.getContext('2d');

// Creating obstacles
for (let row = 2; row <= rows; row++) {
    const numOfObstacles = row + 1;
    // y & x pos
    const y = row * 30;
    for (let col = 0; col < numOfObstacles; col++) {
        const x = WIDTH / 2 - obstacleSpacing * (row / 2 + col);
        obstacles.push({ x, y, radius: obstacleRadius });
    }
}

// draw obstacles
function drawObstacles() {
    ctx.fillStyle = 'black';
    obstacles.forEach((obs) => {
        ctx.beginPath();
        ctx.arc(obs.x, obs.y, obs.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    })
}