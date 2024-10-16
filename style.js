var cont = 0;
        document.getElementById("btn1").addEventListener("click", function(){
            cont++;
            document.getElementById("cont").innerText = "Numero de Cliques: " +cont;
        });

document.getElementById("btn2").addEventListener("click", function(){
    document.getElementById("texto").style.color = "red";
});

document.getElementById("btn3").addEventListener("click",function(){
    var numb1 = parseFloat(document.getElementById("num1").value);
    var numb2 = parseFloat(document.getElementById("num2").value);
    var soma = numb1 + numb2;
    document.getElementById("resul").innerText = "Resultado: " + soma;
});