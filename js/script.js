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
	makeTest: function () {
		console.log("test");
	}
};
//в данном случае снизу мы деструктурируем объект оптион и вытаскиваем оттуда ключи вложенного объекта колор в консоли мы получаем значение клчей колор
const { border, background } = options.colors;
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


for (let i = 1; i <= 5; i++) {
	console.log(i);
}
let num = 8;
while (num) {
	console.log(num);
	num--;
}
let pip = 0;
while (pip < 3) {
	console.log(`Chislo ${pip}`);
	pip++;
}
function calcSumm(numOne, numTwo) {
	if (numTwo === 1) {
		return numOne;
	} else {
		return numOne * calcSumm(numOne, numTwo - 1);
	}
}
console.log(calcSumm(2, 3));

function showMessage(text, name) {
	console.log(`${text},${name}!`)
}
setInterval(showMessage, 500, "Privet", "Lox");

// let name1 = Symbol("id");
let lilya = {
	name:"Лиля",
	lifestyle:"говняк",
	// [id]:"Некое значение",
};
console.log(lilya);
//добавление значения объекта
lilya.iq = 60;
console.log(lilya);
//добавляем имя свойства из двух или более слов
lilya["lyubit nasvai"] = true;
console.log(lilya);
//добавление вложенности в уже существующий объект
lilya.hobbi = {
	hobbione:"spat",
	hobbitwo:"srat",
};
console.log(lilya);
//изменение значения свойства
lilya.iq = 17;
console.log(lilya);
//удаление свойства из объекта
// delete lilya.iq;
console.log(lilya);
//дублирование объекта по сути мы переносим все данные из одного объекта в друго и можем менять значения
let pasha = Object.assign({},lilya);
pasha.iq = 200;
pasha.name = "pasha";
console.log(lilya);
console.log(pasha);
// тут мы через обжект эссайн добавляем новые свойства и значения в уже дублированный объект
Object.assign(pasha, {pisyun: "2cm", rost: "2metra"});
console.log(pasha);

let objtest = {
	name:"popa",
	age:10,
	height:25,
}
for (let key in objtest){
	//перебираем свойства
	console.log(key);
	//перебираем значения свойств
	console.log(objtest[key]);
}

function Userinfo(name){
	//this = {} создается пустой объект (неявно)
	this.name = name;
	this.age = 20;
	//return this; возвращается объект (неявно) 
}
console.log(new Userinfo("lilya"));
console.log(new Userinfo("pasha"));
//https://youtube.com/clip/UgkxmOXoiQxsbrR26tYXHwekiA81vzBl1J9h?si=BLHy5aXtF9bLhOwW дз сделать на некст занятии
let loserInfo = {
	name: "Вася",
	age:30,
}
console.log(loserInfo);
loserInfo.name = "Lena";
console.log(loserInfo);
delete loserInfo.name;
console.log(loserInfo);

//ЧИСЛА!!!

//запись длинных чисел, чтобы не запутаться 

let someBigNum = 1e6; // 1 * 1000000
console.log(someBigNum);
// для маленьких чисел запись другая 
let someSmallNum = 1e-6; // 1 / 1000000
console.log(someSmallNum);

// to string  считает число в других системах счислений и возвращает строку
let chislo = 228;
console.log(chislo.toString(2));
console.log(chislo.toString(8));
console.log(chislo.toString(16));
// math.floor  округление в меньшую сторону 
let
	numA = Math.floor(5.8),
	numB = Math.floor(3.2),
	numC = Math.floor(-2.4);
	
console.log(numA);
console.log(numB);
console.log(numC);
// Math.ceil окргуляет в большую сторону 
// Math.round округляет до ближайшего целого 


// туфиксед (1) дает нам в ответе одно число после запятой отдает строку, чтобы получить число юзаем +имя либо функцию намбер 

let drob = 5.845;
console.log(drob.toFixed(1));

//isNan нужен для того что бы проверить наше выражение на NaN

console.log(Number(25 + "hui"));
console.log(isNaN(25 + "hui"));


//isFinite  приобразует аргумент в число и возвращает true

console.log(isFinite("25"));
console.log(isFinite("pisya"));
console.log(isFinite(10/0));

//parseInt parseFloat

let problem = parseInt("158.62px");
console.log(problem);
let problemDva = parseFloat("158.62px");
console.log(problemDva);

//math дает рандом от нуля до 1 не включая 1
console.log(Math.random());
//math минимальное и максимальное число из аргументов
console.log(Math.max(5,7,228));
console.log(Math.min(5,7,228));
//math возвращает абсолютное значение числа
console.log(Math.abs(-228));
//math  возводит первый аругмент в степень второго аргумента 
console.log(Math.pow(5,8));


// СДЕЛАТЬ ДОМАШКУ К ПРЕДЫДУЩЕМУ УРОКУ 	mm 