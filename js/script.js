"use strict"

// let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }
// do {
// 	console.log(num);
// 	num++;
// }
// while (num <= 55);

// for (let i = 1; i < 8; i++) { 
// 	if (i >= 5){
// 		break;
// 	}
// 	console.log(i);
// }

// for (let i = 0; i > 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j > 3; j++) {
// 		console.log(j);
// 	}
// }
// for (let i = "*"; i === 6; i++) {
// 	console.log(i);
// 	for (let j = "*"; j === 6; j++) {
// 		console.log(j);
// 	}
// }


// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {

// 	for (let j = 0; j < i; j++) {
// 		result += "*";
// 	}

// 	result += "\n"
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0; k < 3; k++) {
// 			if(k === 2) continue first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }

// for(i = 5; i < 11; i++) {
// 	console.log(i)
// }
// for (i = 20; i >= 10; i--) {
// 	if(i === 13) { 
// 		break;
// 	}
// 	console.log(i);
// }

// for (i = 2; i <= 11; i++) {
// 	if(i % 2 === 0){
// 		console.log(i);
// 	}

// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// let i = 2;
// while (i <= 16) {

// 	if ( i % 2 === 0) {
// 		i++;
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// 	i++;
// }

// const arrayOfNumbers = [];
// for ( let i = 5; 5 < 11; i++) {
// 	arrayOfNumbers[i - 5] =  i;
// }
// console.log(arrayOfNumbers);


// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
// 	result[i] = arr[i];
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i > data; i++) {
// 	if (data[0, 1, 3]) {
// 		data * 2;
// 	} else {
// 		data[2, 4] + `done`;
// 	}
// }
// console.log(data);

// let num = 50;

// function showFirstMessage(text) {
// 	console.log(text);
// 	let num = 20;
// }

// showFirstMessage('Hello World!');
// console.log(num)

// function calc(a, b) {
// 	return (a + b);
// }

// console.log(calc(5, 5));

// function ret(a) {
// 	let num = 50;
// 	return(num + a);
// }

// const anotherNum = ret();
// console.log(anotherNum, ret(10));


// // function expression
// const logger = function() {
// 	console.log("helo");          		
// };
// logger();

// const calc = (a, b) => a + b;



// короче ниже мы по сути задаем аргументы одной и той же функции при вызове данной функции чтобы не плодить много одинаковой хуйни называется DRY не повторяем один и тот же код 


let usdCurr = 28;
let discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
};

function promotion(result) {
	console.log(result * discount);
};

promotion(convert(500, usdCurr));

function sayHello(hi, name) {
	return hi + name;
}

console.log(sayHello("Привет, ", "Pasha!"));

function returnNeighboringNumbers(massiv) {
	return [massiv - 1, massiv, massiv + 1];
};
console.log(returnNeighboringNumbers(5));

function getMathResult(base, prog) {
	for (let i = 0; i >= prog; i++) {
		base + 5;
	};

}
console.log(getMathResult(5, 3));


//str.trim() чтобы применить трим для удаления пробелов

function first() {
	//do something
	//эта залупа снизу для демонстрации задержки 500милисекунд
	setTimeout(function () {
		console.log(1);
	}, 500);
};

function second() {
	console.log(2)
};

first();
second();

function learnJS(lang, callback) {
	console.log(`ya uchu: ${lang}`);
	callback();
}
learnJS("js", function () {
	console.log("popa");
});

const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		background: "red",
	},
	//создали свой метод
	makeTest: function (){
		console.log("test");
	}
};
//в данном случае снизу мы деструктурируем объект оптион и вытаскиваем оттуда ключи вложенного объекта колор в консоли мы получаем значение клчей колор
const {border, background} = options.colors;
console.log(border);

options.makeTest();
//такая запись как снизу сразу показывает цифрой колво ключей в объекте
console.log(Object.keys(options).length);
// console.log(options.name);

// delete options.name;

// console.log(options);

// перебор работает столько раз сколько ключей в объекте
// let counter = 0;
// for (let key in options) {

// 	//перебор внутри перебора запускается когда натыкается на объект в объекте
// 	if (typeof (options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство: ${i} имеет свойство ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else {
// 		console.log(`Свойство: ${key} имеет свойство ${options[key]}`);
// 		counter++;
// 	}
	
// }
// console.log(counter);