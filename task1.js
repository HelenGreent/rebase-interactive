function calculate(equation) {
    let equation2 = [...equation];
    equation2 = equation2.split(" ");
    let [a, operator, b] = equation2;
    switch (operator) {
      case "+":
        equation2 = a.length + b.length;
        break;
      case "-":
        equation2 = a.length - b.length;
        break;
      case "*":
        equation2 = a.length * b.length;
        break;
      case "//":
        equation2 = Math.trunc(a.length / b.length);
        break;
    }
    a = [];
    return ".".repeat(equation2);
  }
