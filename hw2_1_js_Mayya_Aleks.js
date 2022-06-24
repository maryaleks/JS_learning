//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

/*let i = 1
while (i < 10) {
    console.log(2**i)
    i++
} */

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

let count = 1 
const stepen = function(j) {
    while (count <= j) {
        console.log(2**count)
        count++
        
    }
}
stepen(10) 

/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):) */

let y = 1
//let smile = ':)'
//let smile1 = String(smile) 
    while (y <= 5) {
        console.log(':)'.repeat(y))
        y++
    }

    /* 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль 
    (как в условии смайлик), а также количество строк для вывода 
    e.g. function printSmile(stroka, numberOfRows) */
  
   const printSmile = function (smile, y) {
        smile = String(smile)
        let k = 1
        while (k <= y) {
            console.log(smile.repeat(k))
            k++
   }
 
}

printSmile('privet ', 3)


/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных,
 и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list' */

const getWordStructure = function(word){
word = word.toLowerCase()
let count1 = 0
let count2 = 0
const array1 = ['e','y', 'u', 'i', 'o', 'a'];
const array2 = ['q', 'w', 'r', 't', 'p', 'l', 'k', 'j', 'h', 'g', 'f', 'd', 's', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
array1.forEach(element => {
    if (word.includes(element)) {
    count1++; }
    }); 
array2.forEach(element => {
    if (word.toLowerCase().includes(element)) {
    count2++; }
    });    
console.log('Слово', word, 'состоит из', count1, 'гласных и', count2, 'согласных букв')
}
getWordStructure('Check')
getWordStructure('Check-List')
getWordStructure('Check-LIST')
getWordStructure('Check-List21')
getWordStructure('FTPGTHKT')

/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'*/

const isPalindrom = function(word) {
    let wordSymbols = word.split('').reverse().join('');
    console.log(wordSymbols);

    if (wordSymbols.toLowerCase() == word.toLowerCase()) {
        console.log("It's palindrom!")
    }
    else {
        console.log("No, It's not")
    }
    }

isPalindrom('Abba')
isPalindrom('abba')
isPalindrom('privet')