function calculate(equation) {
    equation = equation.split(" ");
    let [a, operator, b] = equation;
    switch (operator) {
      case "+":
        equation = a.length + b.length;
        break;
      case "-":
        equation = a.length - b.length;
        break;
      case "*":
        equation = a.length * b.length;
        break;
      case "//":
        equation = Math.trunc(a.length / b.length);
        break;
    }
    a = [];
    return ".".repeat(equation)
  }
