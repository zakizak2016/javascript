/* concat() => combine two or more string object */
var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);
// => Hello words !

/* toUpperCase() => make capitalize */
var str = "Hello World!";
var res = str.toUpperCase();
// => HELLO WORLD!

/* toLocaleUpperCase() => Convert the string to uppercase  letters */
var str = "Hello World!";
var res = str.toLocaleUpperCase();
// => HELLO WORLD!

/* toLowerCase() => Convert the string to lowercase letters */
var str = "Hello World!";
var res = str.toLowerCase();
// => hello world! !

/* toLocaleLowerCase() => Convert the string to lowercase letters */
var str = "Hello World!";
var res = str.toLocaleLowerCase();
// => hello world!


/* trim() => Remove whitespace from both sides of a string */
var str = "       Hello World!        ";
var res = (str.trim());
// => Hello World!

/* split() => String to array */
var str = "How are you doing today?";
var res = str.split(" ");
// => [ 'How', 'are', 'you', 'doing', 'today?' ]

/* toString() => Return the value of a String object */
var str = "Hello World!";
var res = str.toString();
// => Hello World!

/* search() => search string index */
var str = "Visit W3Schools! 3S";
var n = str.search("3S");
// => 7

/* includes() => Check if a string includes with "world": */
var str = "Hello world, welcome to the universe.";
var res = str.includes("world");
// => true
console.log(res);

charAt()
charCodeAt()

endsWith()
fromCharCode()

indexOf()
lastIndexOf()
localeCompare()
match()
repeat()
replace()

slice()

startsWith()
substr()
substring()









valueOf()
