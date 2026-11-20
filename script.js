const input = document.getElementById("celsius");
const boton = document.getElementById("btnConvertir");
const resultado = document.getElementById("resultado");

function kelvinFahrenheit(celsius){
    const fahrenheit = ((celsius * (9 / 5)) + 32);
    const kelvin = celsius + 273.15;
    return {fahrenheit, kelvin};
}

boton.addEventListener("click", () => {
    const valorTexto = input.value.trim();

if (valorTexto === "" || isNaN(Number(valorTexto))) {
  resultado.textContent = "No has ingresado un número. Intenta nuevamente";
  return;
}
  const celsius = Number(valorTexto);
  const { fahrenheit, kelvin } = kelvinFahrenheit(celsius);
  resultado.style.color = "black";
  resultado.innerHTML = `
  Celsius: ${celsius} °C<br>
  Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
  Kelvin: ${kelvin.toFixed(2)} K
  `
});
