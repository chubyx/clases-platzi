var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};



var movimiento = 40;
var x = 420;
var y = 420;

document.addEventListener("keyup", movervaca);

function movervaca(evento){
  switch (evento.keyCode){
    case teclas.UP:
        y = y - movimiento;
        if(y < -40){
          y = 500;
        }
        dibujar();
        break;
    case teclas.DOWN:
        y = y + movimiento
        if(y > 500){
           y = 0;
        }
        dibujar();
        break;
    case teclas.LEFT:
        x = x - movimiento;
        if(x < -40){
           x = 500;
        }
        dibujar();
        break;
    case teclas.RIGHT:
        x = x + movimiento;
        if(x > 500){
           x = 0;
        }
        dibujar();
        break;
      default:
  }
  }
var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
  }
var pollo = {
  url: "pollo.png",
  cargaOK: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
}

    var cantidad = aleatorio(0, 3);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarfondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarvacas);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarpollos);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarcerdos);

function cargarfondo()
{
  fondo.cargaOK = true;
  dibujar()
}

function cargarvacas()
{
  vaca.cargaOK = true;
  dibujar()
}
function cargarpollos()
{
  pollo.cargaOK = true;
  dibujar()
}
function cargarcerdos()
{
  cerdo.cargaOK = true;
  dibujar()
}


function dibujar()
{
  if (fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
    if (vaca.cargaOK == true)
  {
    if (pollo.cargaOK == true)

    if (cerdo.cargaOK == true)

    console.log(cantidad);
    for (var v = 0; v < cantidad; v++ )
    {
      var x1 = aleatorio(0, 7);
      var y1 = aleatorio(0, 7);
      var x1 = x1 * 60;
      var y1 = y1 * 60;
      var x2 = aleatorio(0, 7);
      var y2 = aleatorio(0, 7);
      var x2 = x2 * 60;
      var y2 = y2 * 60;
      var x3 = aleatorio(0, 7);
      var y3 = aleatorio(0, 7);
      var x3 = x3 * 60;
      var y3 = y3 * 60;
      papel.drawImage(vaca.objeto, x1, y1);
      papel.drawImage(pollo.objeto, x2, y2);
      papel.drawImage(cerdo.objeto, x3, y3);
    }
  }
}


function aleatorio(min, max)
 {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
