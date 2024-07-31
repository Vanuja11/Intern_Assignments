function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

const numberArray = [1, 2, 3, 4, 5];
const reversedNumberArray = reverseArray(numberArray);
console.log(reversedNumberArray);

const stringArray = ['a', 'b', 'c', 'd'];
const reversedStringArray = reverseArray(stringArray);
console.log(reversedStringArray);