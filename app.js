// 1
let num = prompt("Введите число: ");
let word = prompt("Введите слово (на английском): ");
for (let i = 0; i < num; i++) {
    if (i === 0) {
        console.log((i + 1) + ". " + word);
    } else {
        console.log((i + 1) + ". " + word + "s");
    }
}

// 2

let base = Number(prompt("Введите основание:"));
let exponent = Number(prompt("Введите показатель степени:"));

let output = base;

for(let i = 1; i < exponent; i++) {
    let temp = output;
    for(let j = 1; j < base; j++) {
        temp += output;
    }
    output = temp;
}

alert("Результат: " + output);
// 3
let steps = prompt("Введите количество ступеней: ");
let symbol = prompt("Введите символ отступов: ");
let endSymbol = prompt("Введите конечный символ: ");

for (let i = 0; i < steps; i++) {
    console.log(symbol.repeat(i) + endSymbol);
}   