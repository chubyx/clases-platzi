var estado = 0;
var colorLinea = "blue";
var x;              
var y;

document.addEventListener("mousedown", click);
document.addEventListener("mouseup", soltarClick);
document.addEventListener("mousemove", mover);
var cuadrito = document.getElementById("dfDibujo");
var papel = cuadrito.getContext("2d");

dibujarLinea("red", 0, 0, 500, 0, papel)
dibujarLinea("red", 500, 0, 500, 500, papel)
dibujarLinea("red", 500, 500, 0, 500, papel)
dibujarLinea("red", 0, 500, 0, 0, papel)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function mover(evento)
 {
   if (estado == 1)
   {
    dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
 }

function soltarClick(evento)
  {
    estado = 0;
  x = evento.layerX;
  y = evento.layerY;
  }

function click(evento)
 {
   estado = 1;
  x = evento.layerX;
  y = evento.layerY;
 }
