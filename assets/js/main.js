var canvas = document.getElementById('monCanvas');
var ctx = canvas.getContext("2d");



ctx.fillStyle = 'green';
ctx.fillRect(200,100,250,100);

ctx.fillStyle = "green";
ctx.fillRect(153, 150, 350, 70);

ctx.beginPath();
ctx.arc(180, 250, 30, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(450,250, 30, 0, 2 * Math.PI);
ctx.stroke();
