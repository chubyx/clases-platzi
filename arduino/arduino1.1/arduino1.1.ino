int amarillo = 13;
int milisegundos = 300;

void setup()
{
  pinMode(amarillo, OUTPUT);
}

void loop()
{
  digitalWrite(amarillo, HIGH);
  delay(milisegundos);
  digitalWrite(amarillo, LOW);
  delay(milisegundos * 2);
}
