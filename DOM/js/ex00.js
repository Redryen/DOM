
    function somar(){
        var v1, v2, r
        v1 =  document.getElementById("primeirovalor").value
        v2 =  document.getElementById("segundovalor").value
     
      if(v1=="" || v2 == ""){
            alert("Preencha os dois valores!")
      }
      
      else{
        r = parseFloat(v1) + parseFloat(v2)
        document.getElementById("resultado").innerHTML = `O resultado da soma é: ${r}`

      }
    }


    function subtrair(){
        var v1, v2, r
        v1 =  document.getElementById("primeirovalor").value
        v2 =  document.getElementById("segundovalor").value

         if(v1=="" || v2 == ""){
            alert("Preencha os dois valores!")
      }
      
      else{
        r = parseFloat(v1) - parseFloat(v2)
        document.getElementById("resultado").innerHTML = `O resultado da subtração é: ${r}`

      }
    }


    function multiplicar(){
        var v1, v2, r
        v1 =  document.getElementById("primeirovalor").value
        v2 =  document.getElementById("segundovalor").value

        if(v1=="" || v2 == ""){
            alert("Preencha os dois valores!")
      }

      else{
        r = parseFloat(v1) * parseFloat(v2)
        document.getElementById("resultado").innerHTML = `O resultado da multiplicação é: ${r}`

      }
    }


    function dividir(){
        var v1, v2, r
        v1 =  document.getElementById("primeirovalor").value
        v2 =  document.getElementById("segundovalor").value 

        if(v1=="" || v2 == ""){
            alert("Preencha os dois valores!")
      }
        
        if(v2==0){
            alert("Impossível dividir por zero!")
        }

        else{   
            r = parseFloat(v1) / parseFloat(v2)
            document.getElementById("resultado").innerHTML = `O resultado da divisão é: ${r}`
        }
    }

