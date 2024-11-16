let expression = "";
let lastResult = 0;
let history = "";
let result = "";

function appendToExpression(value) {
  expression += value;
  document.getElementById("expression").value = expression;
}

function changeValue() {
  expression = history;
  history = "";
  document.getElementById("expression").value = expression;
  document.getElementById("history").innerText = history;
  document.getElementById("show-history").style.visibility = "hidden";
}

function deleteLast() {
  expression = expression.slice(0, -1);
  document.getElementById("expression").value = expression;
}

function clearDisplay() {
  history = expression;
  expression = "";
  document.getElementById("expression").value = "";
  document.getElementById("result").innerText = "0";
  document.getElementById("show-history").style.visibility = "visible";
  document.getElementById("history").innerText = history;
}

function getAnswer() {
  expression = lastResult;
  document.getElementById("expression").value = expression;
  document.getElementById("result").innerText = "0";
}

function calculateResult(value) {
  try {
    if (expression.charAt(0) === "√") {
        expression += ")";
      }
      
      console.log(value);
      let formattedExpression = expression
        .replace(/×/, "*")
        .replace(/÷/, "/")
        .replace(/√/, "Math.sqrt(");

      result = eval(formattedExpression);

      document.getElementById("result").innerText = `${result}`;

      lastResult = result;
  } catch (error) {
    document.getElementById("result").innerText = "Error";
  }
}
