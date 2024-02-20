var number = parseInt(prompt("Insira um número: "));

if (number <= 0) {
    if (number == 0) {
        console.log("O número é igual a zero.");
    } else {
        console.log("O número é menor que zero.");
    }
} else {
    console.log("O número é maior que zero.");
}
