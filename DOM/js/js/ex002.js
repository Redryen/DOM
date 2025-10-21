
function calcularIMC() {
    var peso, altura, imc
     peso = document.getElementById("valorPeso").value
     altura = document.getElementById("valorAltura").value

     imc = peso / (altura * altura)

    document.getElementById("resultado").innerHTML = `Seu IMC é: ${imc}`

    if (imc < 18.5) {
        document.getElementById("resultado").className = "abaixo-peso"
    } else if (imc >= 18.5 && imc < 24.9) {
        document.getElementById("resultado").className = "peso-normal"
    } else if (imc >= 25 && imc < 29.9) {
        document.getElementById("resultado").className = "sobrepeso"
    } else {
        document.getElementById("resultado").className = "obesidade"
    }   

}
