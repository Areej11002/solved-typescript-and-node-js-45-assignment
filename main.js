var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
task: 1;
1.; //1. Install [node.js] (https://nodejs.org/en/), [TypeScript] (https://www.typescriptlang.org/download)  and [vs code](https://code.visualstudio.com/) on your computer.
task: 2;
//2. personal Massage: store a person's name in a varible, and print a message to that person. Your message should be simple, such as, “Hello Eric,
//would you like to learn some python today?”
var firstName = "Eric";
console.log("Eric ".concat(firstName, ",\"would you like to learn some python today?\""));
task: 3;
//3. Name cases: store a person's name in a variable, and then print that person's name in lowcase, uppercase, and titlecase
var firstname = "Areej Shah";
console.log(firstname.toLocaleLowerCase());
console.log(firstname.toLocaleUpperCase());
console.log(firstname.charAt(0).toLocaleUpperCase() + firstname.slice(1));
task: 4;
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log('Tonny Robbin once said,"setting goals is the first step in turning the invisble into the visible"');
task: 5;
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = 'Tonny Robbin';
var quote = "setting goals is the first step in turning the invisble into the visible";
console.log("".concat(famous_person, " once said, ").concat(quote));
task: 6;
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
console.log("HelloMyWorld");
console.log("Hello\nMy\nWorld");
console.log("My\tSon\tName\tIs\tUrooj\tShah");
console.log("My\nSon\nName\nIs\nUrooj\nShah");
task: 7 / 8;
//7-Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//8-You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
task: 9;
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var FavoriteNumber = 7;
console.log('My Favorite Number is ${FavoriteNumber}.');
task: 10;
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
author: ["Areej Shah"];
date: ["Monday , Feburary 27 , 2024"];
//task 9: printing my favorite number.
var Favoritenumber = 7;
// reveling my favorite number in a message format.
console.log('My Favorite Number is ${Favoritenumber}.');
task: 11;
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["zara", "hamza", "zaheem", "imran"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
task: 12;
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var Names = ["zara", "hamza", "zaheem", "areeba"];
var message = "do you like to play football?";
console.log(Names[0] + " " + message);
console.log(Names[1] + " " + message);
console.log(Names[2] + " " + message);
console.log(Names[3] + " " + message);
task: 13;
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = ["Honda Motorcycle", "Audi", "Honda City"];
transportation.map(function (items) { return console.log("i would like to own a ".concat(items)); });
task: 14;
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestArr = ["zara", "hamza", "zaheem"];
guestArr.map(function (items) { return (console.log("Dear ".concat(items, " , You are invited to the dinner"))); });
task: 15;
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//•Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var GuestArr = ["zara", "hamza", "zaheem", "azib"];
var CanNotAttend = "azib";
//console.log (CanNotAttend + " " "can not attend to diner.")
var newGuest = "Ali";
GuestArr[GuestArr.indexOf(CanNotAttend)] = newGuest;
//console.log(GuestArr);
GuestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are inivited to the diner"));
});
task: 16;
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
var guesTArr = ["zara", "hamza", "zaheem", "azib"];
var CanNotattend = "hamza";
var NewGuest = "rayan";
guestArr[guestArr.indexOf(CanNotattend)] = NewGuest;
console.log(guesTArr);
guesTArr.map(function (items) {
    return (console.log("Dear ".concat(items, " , i found a bigger dinner table so I am inivitad more peoples.")));
});
//Part 2 Beginning • Add one new guest to the beginning of your array.
var guestBeg = "nabeel";
guestArr.unshift(guestBeg);
console.log(guestBeg);
//Part 3 Middle • Add one new guest to the middle of your array. 
var MiddleGuest = "fatima";
var middleIndex = guestArr.length / 0;
guestArr.splice(middleIndex, 0, MiddleGuest);
console.log(guestArr);
//Part 4/5 Append • Use append() to add one new guest to the end of your list.• Print a new set of invitation messages, one for each person in your list.
guestArr.push("zeeshan");
console.log(guestArr);
task: 17;
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//initial list of guests
var guests = ["hamza", "zaheem", "ali", "nabeel", "bilal"];
//Informing that only two people can be invited
console.log("Due to limited space, only two people can be invited for dinner.");
// Removing guests until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop(); // Remove the last guest from the list
    console.log("sorry, ".concat(removedGuest, ", you're no longer invited to dinner."));
}
// printing invitations to the remaining two guests
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
// Removing the last two names from the list 
guests.pop();
guests.pop();
//printing the final list to conform it's empty
console.log("final guest list:", guests);
task: 18;
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// store the locations in an array
var placesTovisit = ["Pakistan", "Korea", "Japan", "America", "londan"];
// print the array in its original order
console.log("original order:", placesTovisit);
// print the array in alphabetical order without modifying the actual list.
console.log("alphabetical order:", __spreadArray([], placesTovisit, true).sort());
// Show that your array is still in its original order.
console.log("original order after sorting:", placesTovisit);
// Print the array in reverse alphabetical oder without chaning the order of the orginal list.
console.log("Reverse alphabetical order:", __spreadArray([], placesTovisit, true).sort().reverse());
// show that the array still in its original order.
console.log("original order after reverse order:", placesTovisit);
// Reverse the order of the list.
placesTovisit.reverse();
console.log("Reversed order:", placesTovisit);
// Reverse the order of your list again to get back to the original order.
placesTovisit.reverse();
console.log("Back to original order:", placesTovisit);
// sort the array in alphabetical order.
placesTovisit.sort();
console.log("sorted in alphabetical order:", placesTovisit);
//sort the array in reverse alphabetical order.
placesTovisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("sorted in reverse alphabetical order:", placesTovisit);
task: 19;
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var invitations = ["ali", "bilal"];
var count_invitations = invitations.length;
console.log("".concat(count_invitations, ", people will come to the dinner "));
task: 20;
// Think of something you could store in a array.For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.Write a program that creates a list containing these items.
var country = ["pakistan", "korea", "japan", "america", "england"];
console.log("list of country:");
console.log("country");
task: 21;
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var person = { name: "areej", fname: "female", age: "18" };
console.log(person);
task: 22;
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//console.log(days{7});
console.log(days[6]);
task: 23;
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
var car = "subaru";
console.log("Is car == 'subaru'? predict True");
console.log(car == 'subaru');
console.log("is car != 'honda city'? predict");
console.log(car != 'honda city');
console.group("is car == 'subaru'? predict false");
console.log(car == 'subaru');
console.group("is car == 'Subaru'? predict false");
console.log(car == 'Subaru');
console.log("is car.length == 6 ? predict true");
console.log(car.length == 6);
console.log("is car.length != 10 ? predict true");
console.log(car.length != 10);
console.log("is 10 > 45 ? predict false");
console.log(10 > 45);
console.log("is 3 <= 2 ? predict false");
console.log(3 <= 2);
console.log("is 72 >= 83 ? predict false");
console.log(72 >= 83);
console.log("is car == 'subaru' && car.length == 6? predict true");
console.log(car == 'subaru' && car.length == 6);
task: 24;
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
// 1: • Tests for equality and inequality with strings
var name_1 = "zara";
var name_2 = "zara shah";
var name_3 = "zarkook";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
// 2: • Tests using the lower case function
if (name_1 != name_3) {
    console.log("names are equal");
}
// 3: • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var age_1 = 18;
var age_2 = 22;
if ("age_1 == 18") {
    console.log("eligible for vote");
}
if ("age_2 != 22") {
    console.log("eligible for vote in older category");
}
if ("age_1 <= age_2") { //less
    console.log("younger");
}
if ("age_2 >= age_1") { //greater
    console.log("older");
}
// 4: • Tests using "and" and "or" operators
if ("age_1 == 18 && age_2 == 22") {
    console.log("person is eligible for vote");
}
if ("age_1 == 18 && age_2 != 22") {
    console.log("person is eligible not for vote");
}
if ("age_1 == 18 || age_2 != 22") {
    console.log("person is eligible not for vote");
}
// 5: • Test whether an item is in a array
var Country = ["pakistan", "south korea", "china", "japan"];
if ("country.includes") {
    console.log("pakistan is in Country list");
}
// 6: • Test whether an item is not in a array
if (!country.includes("america")) {
    console.log("america is not includes in an array");
}
task: 25;
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.
//let alien_color = "green";
if ("alien_color == \"green\"")
    console.log("you earn 5 point");
var alien_color = "red";
if (alien_color == "green")
    console.log("no output");
task: 26;
// Alien Colors #2:Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else bloc
var Alien_color = "green";
if (Alien_color == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log(" player just earned 10 points");
}
//let alien_color = "red";
if (Alien_color == "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log(" player just earned 10 points");
}
task: 27;
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien
var alien_colour = "green";
if (alien_colour == "green") {
    console.log(" 5 points ");
}
else if (alien_colour == "yellow") {
    console.log(" 10 points ");
}
else {
    console.log(" 10 points ");
}
task: 28;
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder
var age = 18;
if (age < 2) {
    console.log("you are a baby");
}
else if (age > 4) {
    console.log("you are a toldder");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are a older");
}
task: 29;
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["kivi", "orange", "apples", "berry", "peach"];
if (favorite_fruits.includes("kivi")) {
    console.log("kivi");
}
if (favorite_fruits.includes("apple")) {
    console.log("apple");
}
if (favorite_fruits.includes("orange")) {
    console.log("orange");
}
if (favorite_fruits.includes("berry")) {
    console.log("you really like bananas");
}
if (favorite_fruits.includes("peach")) {
    console.log("you really like bananas");
}
task: 30;
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
var users = ["admin", "eric", "haseeb", "ali", "fatima"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user_1 = users_1[_i];
    if (user_1 === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(user_1, ", thank you for logging in again"));
    }
}
task: 31;
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed
var user = ["eric", "haseeb", "fatima", "ali", "admin"];
if ("users.length === 0") {
    console.log("no need to find some users!");
}
else {
    for (var _a = 0, _b = "users"; _a < _b.length; _a++) {
        var user_2 = _b[_a];
        if (user_2 === "admin") {
            console.log("hello admin, would you like to see a status report?");
        }
        else {
            console.log("hello ".concat(user_2, ", thank you for logging in again"));
        }
    }
}
user = [];
if ("users.length === 0") {
    console.log("we need to find some users!");
}
task: 32;
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
var current_users = ["Admin", "Eric", "Ali", "Hamza", "Fatima"];
var new_users = ["Admin", "Fatima", "Aliza", "Haseeb", "Noor"];
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
for (var _c = 0, new_users_1 = new_users; _c < new_users_1.length; _c++) {
    var new_user = new_users_1[_c];
    if ("current_users_lower.includes (new_user.toLowerCase()") {
        console.log("sorry ".concat(new_user, ",that name is taken"));
    }
    else {
        console.log("yes ".concat(new_user, ", is still in avaliable list"));
    }
}
task: 33;
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _d = 0, numbers_1 = numbers; _d < numbers_1.length; _d++) {
    var number = numbers_1[_d];
    if (number === 1) {
        console.log("".concat(numbers, "st")); //1st
    }
    else if (number === 2) { //2nd
        console.log("".concat(numbers, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(numbers, "nd")); //3rd
    }
    else {
        console.log("".concat(number, "th")); //4th , 5th , 6th , 7th , 8th , 9th
    }
}
task: 34;
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var favourite_pizza = ["pepperoni", "chicken", "veg"];
for (var _e = 0, favourite_pizza_1 = favourite_pizza; _e < favourite_pizza_1.length; _e++) {
    var pizza = favourite_pizza_1[_e];
    console.log(pizza);
}
console.log("\n");
for (var _f = 0, favourite_pizza_2 = favourite_pizza; _f < favourite_pizza_2.length; _f++) {
    var pizza = favourite_pizza_2[_f];
    console.log(" I really like ".concat(pizza, " pizzal"));
}
console.log("\nI really love pizza!");
task: 35;
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["cat", "lion", "dog"];
for (var _g = 0, animals_1 = animals; _g < animals_1.length; _g++) {
    var animal = animals_1[_g];
    console.log(animal);
}
console.log("\n");
for (var _h = 0, animals_2 = animals; _h < animals_2.length; _h++) {
    var animal = animals_2[_h];
    console.log(" A ".concat(animal, " has a tail"));
}
console.log("\n all of these are great pets! but i love cats more");
task: 36;
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
//The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function makeShirt(size, text) {
    console.log("you order a ".concat(size, " shirt that says ").concat(text));
}
makeShirt("large", "\" i love typescript\"");
makeShirt("medium", "\" i need a big shirt \"");
task: 37;
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function MakeShirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = " i love typescript"; }
    console.log("you have order a ".concat(size, ", shirt that says ").concat(text));
}
MakeShirt();
MakeShirt("medium");
// different message
MakeShirt("small", "i need a big shirt to wear");
task: 38;
//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. 
//Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("karachi"); //defult sentence
describe_city("france", "europe");
describe_city("lahore", "punjab");
task: 39;
//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
var c1 = cityCountry("lahore", "pakistan");
var c2 = cityCountry("tokyo", "japan");
var c3 = cityCountry("paris", "france");
console.log(c1);
console.log(c2);
console.log(c3);
task: 40;
//Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.
function makeAlbum(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: artist.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
var album = makeAlbum("raees", "Red wave");
console.log(album);
album = makeAlbum("laiba", "Light");
console.log(album);
album = makeAlbum("sania", "Seenbreez");
console.log(album);
task: 41;
//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["ali", "hamza", "bilal"];
show_magicians(magician);
task: 42;
//Great Magicians: Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) { // i stand for index string
        magicians[i] = magicians[i] + " the great";
    }
}
var magicians2 = ["ali", "hamza", "bilal"];
make_great(magicians2);
console.log(magicians2);
task: 43;
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//return the new array and store it in a separate array. Call show_magicians()
// with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; 1 < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " the great");
    }
    return greatMagicians;
}
var magicians3 = ["usman", "wahaj", "haseeb"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
task: 44;
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich order;");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
}
console.log("enjoy your sandwich zara shah");
sandwich("capsicum", "tomato", "chicken");
sandwich("beef", "cheese");
sandwich("garlic chicken", "mayo sauce");
task: 45;
function createcar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createcar("toyota", "corolla", { colour: "silver", year: "2024" });
console.log(mycar);
