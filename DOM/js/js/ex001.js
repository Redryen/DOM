
function converter() {
    var valorDolar = document.getElementById("valorDolar").value;
    var taxaCambio = 5.25; // Exemplo de taxa de câmbio
    var valorReal = valorDolar * taxaCambio;
    document.getElementById("resultado").innerHTML = `O valor em Real é: ${valorReal.toFixed(2)}`;
}