function calcular() {
  let noches = parseInt(document.getElementById("noches").value);
  let costo = parseFloat(document.getElementById("costo").value);
  let total = noches * costo;
  document.getElementById("resultado").textContent = "Total a cobrar: $" + total;
}