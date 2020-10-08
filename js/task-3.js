// Задача 2 - 3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

function formatString(string, maxLength = 40) {
  // Write code under this line
  let message = " ";
  if (string.length <= maxLength) {
    return message;
  }
  return message[0];
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
