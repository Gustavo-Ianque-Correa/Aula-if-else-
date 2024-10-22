
//Valores
const idade = document.getElementById("idade").value;
const result = document.getElementById("resultado");
//Fim Valores


//Functs
function verificarIdade() {

    const idade = document.getElementById("idade").value;

    if (idade >= 18) {
        result.textContent = "Você é maior de idade.Uhu, poderei tirar carteira de motorista!";
    } else {
        result.textContent = "Você é menor de idade!";
    }

}


function Limpar() {
    const inputIdade = document.getElementById("idade");

    inputIdade.value = "";
    result.textContent = "";
}

//Funcões_fim