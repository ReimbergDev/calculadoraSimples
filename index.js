var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("p1");

function calculate() {
  var num1 = parseFloat(n1.value);
  var num2 = parseFloat(n2.value);
  var operator = document.getElementById("operator").value;
  
  if (isNaN(num1) || isNaN(num2)) { // Verifica se num1 e num2 são números válidos
    res.innerHTML = "Por favor, insira números válidos.";
    return;
  }

  switch (operator) {
    case "+":
      res.innerHTML = "O resultado da soma é: " + (num1 + num2);
      break;
    case "-":
      res.innerHTML = "O resultado da subtração é: " + (num1 - num2);
      break;
    case "*":
      res.innerHTML = "O resultado da multiplicação é: " + (num1 * num2);
      break;
    case "/":
      if (num2 === 0) { // Verifica se o divisor é zero
        res.innerHTML = "Erro: divisão por zero.";
        return;
      } else {
        res.innerHTML = "O resultado da divisão é: " + (num1 / num2);
      }
      break;
    default:
      res.innerHTML = "Operador inválido. Por favor, insira um operador válido (+, -, *, /).";
      return;
  }
}
