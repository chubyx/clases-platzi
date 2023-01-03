var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoporClick()
{
  var xxx = parseInt(texto.value);
  var lineas = xxx;
  var l = 0;
  var yi, xf, xi, yf;
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    xi = espacio * l;
    yf = espacio * (l + 1);
    dibujarLinea("blue", 0, yi, xf, 300);
    dibujarLinea("blue", xi, 0, 300, yf);
    console.log("linea " + l);
  }
  dibujarLinea("red", 0, 0, 0, 300);
  dibujarLinea("red", 0, 0, 300, 0);
  dibujarLinea("red", 0, 300, 300, 300);
  dibujarLinea("red", 300, 0, 300, 300);
}
