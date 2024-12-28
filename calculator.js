left_operand = 2; // left operand
right_operand = 3; //right operand
operator = '*';  // target operator
let ans = NaN;
let all_operators = ['+', '-', '*', '/'];
if(operator === '+') {
    ans = left_operand + right_operand;
} else if(operator === '-') {
    ans = left_operand - right_operand;
} else if(operator === '*') {
    ans = left_operand * right_operand;
} else if(operator === "/") {
    ans = left_operand / right_operand;
} else {
    ans  = NaN
}

console.log(`ans value is ${ans}`);

