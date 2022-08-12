function calc(operator, a, b) {

    switch (operator) {
        case 'add':
            return Number(a) + Number(b);
            break;
        case 'multi':
            return a * b;
            break;
        case 'subtract':
            return a - b;
            break;
        default:
            break;
    }
}

console.log(calc('add', 2, 5));
console.log(calc('multi', 2, 5));
console.log(calc('subtract', 2, 5));