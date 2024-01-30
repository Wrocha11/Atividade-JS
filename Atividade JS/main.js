//1. Crie um script que exiba uma mensagem "Hello World" no console do navegador.

console.log("Hello World")

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.


let a = 5
let b = 10

console.log(a + b)

//3. Crie um script que declare uma variáveis e verifique se o valor é um número. Se for, exiba a mensagem "E um número". Se não for, exiba a mensagem "Não é um número".

let valor = 5

if (typeof valor === "number") {
  console.log("E um número")
}
else {
  console.log("Não é um número")
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let valor2 = 'e'

if (typeof valor2 === "string") {
  console.log("É uma string")
}
else {
  console.log("Não é uma string")
}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".


let valor3 = true

if (typeof valor3 === "boolean") {
  console.log("É um booleano")
}
else {
  console.log("Não é um booleano")
}

//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let a2 = 5
let b2 = 10

console.log(a2 - b2)

//7.  Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let a3 = 5
let b3 = 10

console.log(a3 * b3)

//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let a4 = 5
let b4 = 10

console.log(a4 / b4)

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let valor4 = 6

if (valor4 % 2 === 0) {
  console.log("É um número par")
}
else {
  console.log("Não é um número par")
}

//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let valor5 = 23

if (valor5 % 2 === 1) {
  console.log("É um número impar")
}
else {
  console.log("Não é um número impar")
}