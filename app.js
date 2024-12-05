let text = "32,31,34,36,31"

let textReplace = text.replaceAll(",",";")
console.log(textReplace);

let textSplit = text.split(",")

textSplit = textSplit.join(";")
console.log(textSplit);

const arr = [10,20,30,40,50,60,70,80,90,100]
const [firstNumber,secondNumber, ...otherParts] = arr
console.log(firstNumber);
console.log(secondNumber);
console.log(otherParts);
const biggestNumber = Math.max(...arr) 
console.log(biggestNumber);


let arr1 = ["eli","valeh","john","wick","sister"]
console.log(arr1);

const copyArr = [...arr1,'eli','valeh','john','wick','sister']
console.log(copyArr);

