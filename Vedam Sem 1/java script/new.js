// Main calculator function using switch
function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Error: Division by zero is not allowed.";
            }
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return "Error: Invalid operator.";
    }

    return `Result: ${result}`;
}


