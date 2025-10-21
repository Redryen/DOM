function gerarPA() {
    var pValor = document.getElementById("primeiro").value;
    var rValor = document.getElementById("razao").value;
    var qValor = document.getElementById("quantidade").value;

    if (pValor === "" || rValor === "" || qValor === "") {
        alert("Preencha todos os campos!");
        return;
    }

    var p = parseFloat(pValor);
    var r = parseFloat(rValor);
    var q = parseInt(qValor);

    if (isNaN(p) || isNaN(r) || isNaN(q)) {
        alert("Valores inválidos! Verifique os dados inseridos.");
        return;
    }

    if (q <= 0) {
        alert("A quantidade de termos deve ser maior que zero!");
        return;
    }

    let pa = [];

    for (let i = 0; i < q; i++) {
        pa.push(p + i * r);
    }

    document.getElementById("resultadoPA").innerHTML = `PA gerada: ${pa.join(", ")}`;
}
