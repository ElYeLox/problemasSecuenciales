function calcular() {
  let km = parseFloat(document.getElementById("km").value);
  let cpk = parseFloat(document.getElementById("cpk").value);
  let costo = km * cpk;
  document.getElementById("resultado").textContent = "Costo del boleto: $" + costo;
}