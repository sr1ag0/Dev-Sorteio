
const sorteio = document.querySelector(".button-sorteio")

function sorteador() {

    const max = parseFloat(document.querySelector(".max").value);
    const min = parseFloat(document.querySelector(".min").value);


    if (!min || !max) {
        alert("Digite valores para MIN e MAX!");
        return;
    }


    if (min >= max) {

        alert("Valor MIN tem que ser menor que o Valor MAX!");
        return;
    } else {
        const resultado = Math.floor(Math.random() * (max - min + 1)) + min

        alert(resultado);
    }


}

sorteio.addEventListener("click", sorteador)


