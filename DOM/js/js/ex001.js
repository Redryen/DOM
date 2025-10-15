
function converter() {
    var vd, vc, vr
     vd = document.getElementById("valorDolar").value;
     vc = 5.47; 
     vr = vd * vc;
    document.getElementById("resultado").innerHTML = `O valor em Real é: ${vr.toFixed(2)}`;
}