let contador = 0;
let soma = 0;

while (contador < 3) {
  let valor = parseFloat(prompt("Digite o valor " + (contador + 1) + ":"));
  soma += valor;
  contador++;
}

let media = soma / 3;
console.log("A média dos três valores é:", media);
