
var cont = 0;
document.getElementById("btn1").addEventListener("click", function () {
    cont++;
    document.getElementById("cont").innerText = "Numero de Cliques: " + cont;
});

document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("texto").style.color = "red";

});

document.getElementById("btn3").addEventListener("click", function () {
    var numb1 = parseFloat(document.getElementById("num1").value);
    var numb2 = parseFloat(document.getElementById("num2").value);
    var soma = numb1 + numb2;
    document.getElementById("resul").innerText = "Resultado: " + soma;
});

document.getElementById("btn4").addEventListener("click", function () {
    var nome = document.getElementById("text").value;
    if (nome === "") {
        document.getElementById("404").innerText = "Por Favor, preencha o campo. "
    } else {
        document.getElementById("404").innerText = "Erro 404";
    }
});

document.getElementById("pesq").addEventListener("input", function () {
    var pesquisa = document.getElementById("pesq").value.toLowerCase();
    var linhas = document.querySelectorAll("td");

    linhas.forEach(function (td) {
        if (pesquisa === "" || td.innerText.toLowerCase().includes(pesquisa)) {
            td.style.display = "";
        } else {
            td.style.display = "none"
        }
    });

});

var caixa = document.getElementById("caixa");
caixa.addEventListener("mouseover", function () {
    caixa.style.backgroundColor = "yellow";
});

caixa.addEventListener("mouseout", function () {
    caixa.style.backgroundColor = "red"
});


var botaoAdicionar = document.getElementById("btnADD");
var inputAdicionar = document.getElementById("Add");
var Lista = document.getElementById("ListaTarefas");

botaoAdicionar.addEventListener("click", function () {
    var tarefaText = inputAdicionar.value;

    if (tarefaText === "") {
        alert("Por Favor, Digite uma tarefa.")
        return;
    }

    var novaTarefa = document.createElement("li");
    novaTarefa.innerText = tarefaText;

    var btnRemover = document.createElement("button");
    btnRemover.innerText = "Remover";
    btnRemover.classList.add("Remover");

    btnRemover.addEventListener("click", function () {
        Lista.removeChild(novaTarefa);
    });

    novaTarefa.appendChild(btnRemover);
    Lista.appendChild(novaTarefa);
    inputTarefa.value = "";
});

var agora = new Date();
var horas = agora.getHours();

var mensagem = document.getElementById("mensagem");

if (horas >= 0 && horas < 12) {
    mensagem.innerText = "Bom Dia!!"
} else if 
    (horas >= 12 && horas < 18) {
    mensagem.innerText = "Boa Tarde!!"
} else {
    mensagem.innerText = "Boa Noite!!"
}
