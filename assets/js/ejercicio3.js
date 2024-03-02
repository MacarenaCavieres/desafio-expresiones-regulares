const resultado = document.getElementById("resultado");
const btnSumar = document.querySelector("#btnSumar");
const btnRestar = document.querySelector("#btnRestar");

btnSumar.addEventListener("click", () => {
    const valor1 = document.querySelector("#valor1").value;
    const valor2 = document.querySelector("#valor2").value;
    const num1 = +valor1;
    const num2 = +valor2;
    let result = num1 + num2;
    console.log(result);
    resultado.textContent = `${result}`;
});

btnRestar.addEventListener("click", () => {
    const valor1 = document.querySelector("#valor1").value;
    const valor2 = document.querySelector("#valor2").value;
    const num1 = +valor1;
    const num2 = +valor2;
    let result = num1 - num2;
    console.log(result);

    if (result < 0) {
        result = 0;
    }

    resultado.textContent = `${result}`;
});
