/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for( let i=0; i<array.length; i++ ) {
			fn( array[i], i, array );
		}

	return;
}

const arr = [1, 2, 3, 4, 5];
const foo = (n) => console.log(n);

forEach(arr, foo);
/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    let newElement = fn(array[i], i, array);

    newArray.push(newElement);
  }

  return newArray;
}

const arrayForMap = [1, 2, 3, 4, 5];
const bar = (n) => ++n;

console.log(map(arrayForMap, bar));

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  let i = 0;
  let result = initial || array[i++];

  while (i < array.length) {
		result = fn(result, array[i], i, array);
    i++;
  }

  return result;
}

const reduceArray = [1, 2, 3, 4, 5];
const baz = (n) => ++n;

console.log(reduce(reduceArray, baz, 2));

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  const propsArray = [];

  for(let key in obj) {
    propsArray.push(key.toUpperCase());
  }

  return propsArray;
}

const human = {
	name: 'Andrej',
	secondName: 'Salo',
	age: 30
}

console.log(upperProps(human));

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
