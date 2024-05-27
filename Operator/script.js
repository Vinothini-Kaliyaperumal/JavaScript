function calculate() {
    // Get the input expression
    let expression = document.getElementById("expressionInput").value;

    // Split the expression into operands and operator
    let parts = expression.split(" ");
    let operand1 = parseFloat(parts[0]);
    let operator = parts[1];
    let operand2 = parseFloat(parts[2]);

    // Calculate the result based on the operator
    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break; 
        case '/':
            if (operand2 !== 0) {
                result = operand1 / operand2;
            } else {
                result = "Error: Division by zero";
            }
            break;
        default:
            result = "Error: Invalid operator";
    }
console.log (result)
    // Display the result
    document.getElementById("result").textContent = "Result: " + result;
}
