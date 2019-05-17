var canvas = document.getElementById('monCanvas');
var ctx = canvas.getContext("2d");
// Le mouvTo(x,y) X = largeur , Y = hauteur ou l'ont commence
// LineTo meme chose, donne les x et y ou l'ont ecrit


// Base de maison
ctx.beginPath();
ctx.moveTo(700,325);
ctx.lineTo(700,500);
ctx.lineTo(500,500);
ctx.lineTo(500,325);
ctx.fillStyle = "blue";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();


// Toit de la maison
ctx.beginPath();
ctx.lineTo(700,325);
ctx.lineTo(600,220);
ctx.lineTo(500,325);
ctx.fillStyle =  "brown"; // Cette fonction indique la couleur du fill
ctx.fill(); // Cette fonction permet de dire qu'on veut un remplissage
ctx.strokeStyle = "black";
ctx.stroke();

// porte maison
ctx.beginPath();
ctx.moveTo(620,500);
ctx.lineTo(620,430);
ctx.lineTo(570,430);
ctx.lineTo(570,500);
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();


// Fenetre maison
ctx.beginPath();
ctx.moveTo(530,350);
ctx.lineTo(530,390);
ctx.lineTo(550,390);
ctx.lineTo(550,350);
ctx.lineTo(530,350);
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

// deuxieme fenetre
ctx.beginPath();
ctx.moveTo(660,350);
ctx.lineTo(660,390);
ctx.lineTo(640,390);
ctx.lineTo(640,350);
ctx.lineTo(660,350);
ctx.strokeStyle = "black";
ctx.fill();
ctx.fillStyle = "black";
ctx.stroke();
