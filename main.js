/*
1) На forEach:

- Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел
*/

// const numbers = [1, 2, 3, 4, 5]
// const squares = []

// numbers.forEach(function(number) {
//   let square = number * number
//   squares.push(square)
// })

// console.log(squares)

/*
1) На forEach:

- Дан массив с числами. Найдите сумму этих чисел.
*/

// const numbers = [1, 2, 3, 4, 5]
// const sum = 0

// numbers.forEach(function(number) {
//   sum += number
// })

// console.log(sum)



/*
2) На map:

- Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
*/

// const numbers = [5, 6, 7, 8, 9]
// const square = numbers.map((num) => num * num)

// console.log(square)



/*
3) На reverse:

- Дан массив с днями недели ['Понедельник', 'Вторник'...]. 
Сделайте так, что он начинался с воскресенья и заканчивался понедельником.
*/

// const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
// const newWeek = week.reverse()

// console.log(newWeek)



/*
4) На split и join:

- C помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"
*/

// const num = [3, 2, 1]
// const newNum = num.join(' > ')

// console.log(newNum)

// const num = [3, 2, 1]
// const newNum = num.join(' больше, чем ')

// console.log(newNum)

/*
4) На split и join:

- Дана строка 'я учу javascript!'. 
С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
*/

// const str = "я учу javascript!"
// const newStr = str.split(' ')

// console.log(newStr)



/*
4) На split и join:

- В переменной date лежит дата в формате '2025-12-31'. 
Преобразуйте эту дату в формат '31.12.2025'.
*/

// let date = '2025-12-31'
// let parts = date.split('-')
// let formattedDate = parts[2] + '.' + parts[1] + '.' + parts[0]
// console.log(formattedDate)

// let date = '2025-12-31'
// let parts = date.split('-').reverse()
// let transformedDate = parts.join('.')
// console.log(transformedDate)



/*
5) На filter:

- Дан массив с числами. Оставьте в нем только отрицательные числа. 
В отдельную переменную положите количество отрицательных чисел в этом массиве.
*/

// const numbers = [1, 2, -3, -4, 5, 6, -7, -8, 9]

// const negativeNum = numbers.filter(number => number < 0)

// const NegativeNumLength = negativeNum.length

// console.log("Отрицательные числа:", negativeNum)
// console.log("Количество отрицательных чисел:", NegativeNumLength)


/*
5) На filter:

- Дан массив со строками. 
Оставьте в нем только те строки, длина которых больше 5-ти символов.
*/

// const strings = ["apple", "banana", "cherry", "date", "elderberry", "grape"]

// const filteredStrings = strings.filter(str => str.length > 5)

// console.log("Строки с длиной более 5 символов:", filteredStrings)



/*
Бонусная задача:

Палиндром — слово, предложение или последовательность символов, 
которая абсолютно одинаково читается как в привычном направлении, так и в обратном. 
К примеру, “Anna” — это палиндром, а “table” и “John” — нет.

Дана строка; нужно написать функцию, которая позволяет вернуть значение true, 
если строка является палиндромом, и false — если нет. 
При этом нужно учитывать пробелы и знаки препинания.

Для решения этой задачи вам понадобится метод у строк .toLowerCase(). 
Для преобразование символов входной строки в нижний регистр. 
Это гарантия того, что программа будет сравнивать именно сами символы, 
а не регистр или еще что-то.
*/

// function palindrome(str) {
//   const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
//   const reversedStr = cleanedStr.split('').reverse().join('')
//   return cleanedStr === reversedStr
// }

// console.log(palindrome("32523"))
// console.log(palindrome("543"))
// console.log(palindrome("Anna"))
// console.log(palindrome("table"))
// console.log(palindrome("A man, a plan, a canal, Panama"))
