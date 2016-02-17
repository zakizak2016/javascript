/* BASIC FUNCTION -----------------------------------------------*/

/* toString() => Return the value of a String object */
var str = "Hello World!";
var res = str.toString();
// => Hello World!


/* UPPERCASE LOWERCASE -----------------------------------------------*/
/* toUpperCase() toLocaleUpperCase() str.toLowerCase() toLocaleLowerCase() */

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


/* MODIFING  -----------------------------------------------*/
/* concat() split() */

/* concat() => combine two or more string object */
var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);
// => Hello words !

/* split() => String to array */
var str = "How are you doing today?";
var res = str.split(" ");
// => [ 'How', 'are', 'you', 'doing', 'today?' ]




/* REPLACING -----------------------------------------------*/
/* trim() replace() slice() */

/* trim() => Remove whitespace from both sides of a string */
var str = "       Hello World!        ";
var res = (str.trim());
// => Hello World!


/* replace() => str_replace */
var str = "Visit W3Schools!";
var res = str.replace("W3Schools", "Microsoft");
// => Visit Microsoft!

/* slice() => Extract parts of a string */
var str = "Hello world!";
var res = str.slice(1,5);
// => ello



/* SEARCHING -----------------------------------------------*/
/* search() includes() match() indexOf() */

/* search() => search string index */
var str = "Visit W3Schools! 3S";
var n = str.search("3S");
// => 7

/* includes() => Check if a string includes with "world": */
var str = "Hello world, welcome to the universe.";
var res = str.includes("world");
// => true

/* match() => Search a string for "ain"*/
var str = "The rain in SPAIN stays mainly in the plain"; 
var res = str.match(/ain/g);
// => [ 'ain', 'ain', 'ain' ]

/* indexOf() => Search a string for "welcome" */
var str = "Hello world, welcome to the universe.";
var res = str.indexOf("welcome");
// => 13



/* OTHERS  -----------------------------------------------*/
charAt()
charCodeAt()

endsWith()
fromCharCode()

indexOf()
lastIndexOf()
localeCompare()
match()
repeat()

startsWith()
substr()
substring()









valueOf()
