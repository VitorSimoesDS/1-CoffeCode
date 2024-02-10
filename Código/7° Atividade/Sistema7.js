let grade = parseFloat(prompt("insira um valor a ser fatorado: "));
let factorial = 1;

for (let i = 1; i <= grade; i++) {
    factorial *= i;
}

console.log("O fatoria de " + grade  + " é " + factorial);
