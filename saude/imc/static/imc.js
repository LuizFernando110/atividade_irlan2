const altura = document.querySelector("#altura");
const massa = document.querySelector("#massa");
const botao = document.querySelector("button");

botao.addEventListener("click", () => {
    const imc = massa.value / (altura.value ** 2) ;
    let situacao;

    switch(true) {
        case imc < 18.5:
            situacao = "Abaixo do peso";
            break;
        case imc < 24.9:
            situacao = "Peso normal";
            break;
        case imc < 29.9:
            situacao= "Sobrepeso";
            break;
        case imc < 34.9:
            situacao = "Obesidade grau I";
            break;
        case imc < 39.9:
            situacao = "Obesidade grau II";
            break;
        default:
            situacao = "Obesidade grau III";
    }

    alert(`Seu IMC é ${imc.toFixed(2)} e você está com ${situacao}`);
})