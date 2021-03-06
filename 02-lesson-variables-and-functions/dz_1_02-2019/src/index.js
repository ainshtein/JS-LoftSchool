/* ДЗ 1 - Функции */

/*
 Задание 1:

 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный ей в качестве параметра

 Пример:
   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет`

 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */
const returnFirstArgument = param => param;

console.log('Task 1 result: ' + returnFirstArgument('param-pam-pam'));

/*
 Задание 2:

 2.1: Функция должна возвращать сумму переданных аргументов

 Пример:
   sumWithDefaults(10, 20) вернет 30
   sumWithDefaults(2, 4) вернет 6

 2.1 *: Значение по умолчанию для второго аргумента должно быть равно 100

 Пример:
   sumWithDefaults(10) вернет 110
 */
const sumWithDefaults = (a, b = 100) => a + b;

console.log('Task 2.1 result: ' + sumWithDefaults(10, 20));
console.log('Task 2.1* result: ' + sumWithDefaults(10));

// function sumWithDefaults(a, b) {
//     if (b === undefined) {
//         b = 100;
//     }
//     return a + b;
// }
// console.log( 'Task 2.1 result: ' + sumWithDefaults(10, 20) );
// console.log( 'Task 2.1* result: ' + sumWithDefaults(10) );




/*
 Задание 3:

 Функция должна принимать другую функцию и возвращать результат вызова этой функции

 Пример:
   returnFnResult(() => 'привет') вернет 'привет'
 */
const returnFnResult = fn => fn();

var foo = () => console.log("Task 3 result: " + "calling function result");
returnFnResult(foo);

/*
 Задание 4:

 Функция должна принимать число и возвращать новую функцию (F)
 При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F

 Пример:
   var f = returnCounter(10);

   console.log(f()); // выведет 11
   console.log(f()); // выведет 12
   console.log(f()); // выведет 13
 */
const returnCounter = n => () => ++n;

var f = returnCounter(10);

console.log("Task 4 result: " + f());
console.log("Task 4 result: " + f());
console.log("Task 4 result: " + f());

/*
 Задание 5 *:

 Функция должна возвращать все переданные ей аргументы в виде массива
 Количество переданных аргументов заранее неизвестно

 Пример:
   returnArgumentsArray(1, 2, 3) вернет [1, 2, 3]
 */
const returnArgumentsArray = (...args) => args;

console.log(returnArgumentsArray(1, 2, 3));

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию

 Пример:
   function sum(a, b) {
     return a + b;
   }

   var newSum = bindFunction(sum, 2, 4);

   console.log(newSum()) выведет 6
 */
function bindFunction(fn) {
    const args = Array.prototype.slice.call(arguments, bindFunction.length);

    return () => fn.apply(null, args);
}

function sum(a, b) {
    return a + b;
}

var newSum = bindFunction(sum, 2, 4);

console.log( 'Task 6 result: ' + newSum() );

export {
    returnFirstArgument,
    sumWithDefaults,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
