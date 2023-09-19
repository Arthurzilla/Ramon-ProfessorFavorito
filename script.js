function pogger(){
    var nome = document.getElementById('nome').value
    var numero = Number(document.getElementById('numero').value)

    if(nome.toLowerCase() == "ramon" && numero < 10){
        alert("ramon não aceita valores menores que 10!")
    }else{
        var texto = ""
        for(let i = 0; i < numero; i++){
        texto = texto + nome + " "
        document.getElementById('outResultado').innerHTML = texto
    }
    
    }
}

var button = document.getElementById('button')
button.addEventListener('click', pogger)