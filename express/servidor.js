var express = require("express");
var app = express();

app.get("/", inicio);
app.get("/curso", cursos)

function inicio(peticion, resultado)
{
  resultado.sen("este es el <strong>home</strong>");
}
function inicio(peticion, resultado)
{
  resultado.sen("estos son los <strong>cursos</strong>");
}

app.listen(8989);
