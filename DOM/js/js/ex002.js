
function calcularIMC() {
    var peso, altura, imc
     peso = document.getElementById("valorPeso").value
     altura = document.getElementById("valorAltura").value

     imc = peso / (altura * altura)

    document.getElementById("resultado").innerHTML = `Seu IMC é: ${imc}`

    if (imc < 18.5) {
        document.getElementById("cor").innerHTML += 
    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById("cor").innerHTML += 
    } else if (imc >= 25 && imc < 30) {
        document.getElementById("cor").innerHTML += 
    } else {
        document.getElementById("cor").innerHTML += 
    }

}
