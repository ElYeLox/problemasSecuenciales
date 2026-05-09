function calcular() {
  let mxn = parseFloat(document.getElementById("mxn").value);
  let tc = parseFloat(document.getElementById("tc").value);
  let dolares = mxn / tc;
  document.getElementById("resultado").textContent = "Dólares obtenidos: " + dolares;
}