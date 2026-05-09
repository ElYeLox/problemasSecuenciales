function calcular() {
  let minutos = parseFloat(document.getElementById("minutos"),value);
  let cpm = parseFloat(document.getElementById("cpm").value);
  let costo = minutos * cpm;
  document.getElementById("resultado").textContent = "Costo de la llamada: $" + costo;
}