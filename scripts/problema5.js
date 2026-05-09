function calcular() {
  let horas = parseFloat(document.getElementById("horas").value);
  let costo = parseFloat(document.getElementById("costo").value);
  let horasCobradas = Math.ceil(horas);
  let total = horasCobradas * costo;
  document.getElementById("resultado").textContent = "Horas cobradas: " + horasCobradas + " | Total: $" + total;
}