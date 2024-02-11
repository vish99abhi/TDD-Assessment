
function stringCalculator(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        const delimiterString = numbers.substring(2, delimiterEndIndex);
        const customDelimiter = delimiterString.replace("[", "").replace("]", "");
        delimiter = escapeRegExp(customDelimiter);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }
  
    const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`));
    let sum = 0;
    const negativeNumbers = [];
  
    for (let i = 0; i < numberArray.length; i++) {
      const number = parseInt(numberArray[i]);
      if (isNaN(number)) {
        continue;
      }
      if (number < 0) {
        negativeNumbers.push(number);
      } else if (number <= 1000) {
        sum += number;
      }
    }
  
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(",")}`);
    }
  
    return sum;
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

console.log(stringCalculator("")) // Output: 0
console.log(stringCalculator("1")) // Output: 1
console.log(stringCalculator("1,5")) // Output: 6
console.log(stringCalculator("1\n2,3")) // Output: 6
console.log(stringCalculator("//;\n1;2")) // Output: 3

module.exports = stringCalculator;