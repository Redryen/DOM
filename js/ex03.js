
function validar(){
    var s, sc, l, lc 
    s = document.getElementById("senha").value
    sc = document.getElementById("senhaC").value
    l = document.getElementById("login").value
    lc = document.getElementById("loginC").value

    if(s=="" || sc=="" || l=="" || lc==""){
        alert("Preencha todos os campos!")
    }   

    else if(s != sc){
        alert("As senhas não coincidem!")
    }   
    else if(l != lc){
        alert("Os logins não coincidem!")
    }

    else if(s == sc || l == lc){
        alert("Cadastro realizado com sucesso!")
        document.getElementById("menssagem").innerHTML = `Cadastro:Login: ${l}  Senha: ${s}`
    }

}
