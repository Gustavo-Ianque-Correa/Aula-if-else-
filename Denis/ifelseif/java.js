function verificar_idade() {
    //valores
    const data_nas = document.getElementById("data_nas").value;
    const nascimento = new Date(data_nas);
    const hoje = new Date()
    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    //endValores


    //If
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    const resultado = document.getElementById("resultado");

    if (idade < 18) {
        resultado.textContent = "Você é menor de idade!"

    } else if (idade === 18) {
        resultado.textContent = "Você tem 18 anos! e só!"

    } else if (idade > 18 && idade < 60) {
        resultado.textContent = "Você é maior de idade e não tem 60 anos ainda!"

    } else {
        resultado.textContent = "Você tem 60 anos ou mais!"
    }
    }
    //End_If

//Limpa
function limpar() {
    const resultado = document.getElementById("resultado");
    const inputData = document.querySelector("#data_nas");

    inputData.value = ""
    resultado.textContent = ""
}
//LimpaEnd