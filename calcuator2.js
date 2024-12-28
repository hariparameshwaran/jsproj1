left_operand = 2;
right_operand = 3;
operator = '/';
let ans = NaN;
let all_operators = ['+','-','*','/'];
ans = operator === '+' ? left_operand + right_operand 
    : operator === '-' ? left_operand - right_operand
    : operator === '*' ? left_operand * right_operand
    : operator === '/' ? left_operand / right_operand
    : NaN;

console.log (`ans is ${ans}`);