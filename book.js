const initial = 'hello';
console.log(`${initial} world!`);
console.log('I can also ' + 'do this!');

let vowels = "aeiou";
console.log(vowels[2]);

let vowels = "aeiou";
for (let i = 0; i < vowels.length; i++) {
  console.log(vowels[i]);
}

let stringA = "I am a simple string.";
let stringB = "I am a simple string, too!";
console.log(stringA + " " + stringB);

let textA = "Please";
let textB = new String("stop");
let combined = textA +" make it " + textB;
console.log(combined);

let foo = "I really";
let blah = "why anybody would";
let blarg = "do this";
let result = foo.concat(" don't know", " ", blah, " ", blarg);
console.log(result);

let theBigString = "Pulp Fiktion is an awesome movie!";
console.log(theBigString.slice(5, 12));

let theBigString = "Pulp Fiktion is an awesome movie!";
console.log(theBigString.substr(0, 4));

let inspirationalQuote = "That which you can concatenate, you can also split apart.";
let splitWords = inspirationalQuote.split(" ");
console.log(splitWords.length);

let days = "Monday,Tuesday,Wednesday,Thursday,Friday, Saturday,Sunday";
let splitWords = days.split(",");
console.log(splitWords[6]);

let question = "I wonder what the pigs did to make these birds so angry?";
console.log(question.indexOf("pigs"));

let question = "How much wood could a woodchuck chuck if a woodchuck could chuck wood?";
console.log(question.lastIndexOf("wood"));
console.log(question.indexOf("wood", 30));

let phrase = "There are 7 little pigs.";
let regexp = /[0-9]/;
let numbers = phrase.match(regexp);
console.log(numbers[0]);

let phrase = "My name is Bond. James Bond.";
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());
