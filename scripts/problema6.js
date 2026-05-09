function calcular() {
  let m2 = parseFloat(document.getElementById("m2").value);
  let precio = parseFloat(document.getElementById("precio").value);
  let total = m2 * precio;
  document.getElementById("resultado").textContent = "Costo total: $" + total;
}