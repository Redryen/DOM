function calcularIMC() {
    var peso = parseFloat(document.getElementById("valorPeso").value);
    var altura = parseFloat(document.getElementById("valorAltura").value);
    var resultado = document.getElementById("resultadoIMC");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, preencha os campos corretamente!");
        return;
    }

    var imc = peso / (altura * altura);
    var classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    resultado.innerHTML = `<strong>Seu IMC é:</strong> ${imc.toFixed(2)}<br><strong>Classificação:</strong> ${classificacao}`;
}
