function calcular() {
  let dist = parseFloat(document.getElementById("dist").value);
  let vel = parseFloat(document.getElementById("vel").value);
  let tiempo = dist / vel;
  document.getElementById("resultado").textContent = "Tiempo: " + tiempo + " horas";
}