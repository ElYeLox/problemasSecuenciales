function calcular() {
  let anio = parseInt(document.getElementById("anio").value);
  let edad = 2026 - anio;
  document.getElementById("resultado").textContent = "Edad aproximada: " + edad + " años";
}