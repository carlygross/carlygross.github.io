function myFunction()
{
    alert("Hey my script is running");
}

function subscribeEmail()
{
    var email = prompt("Enter your email to join our newsletter!");
    alert("Thank you for joining!");
}

function wordBackwards()
{
    var word = prompt("Enter a word to reverse: ");
    var wordReverse = "";
    for (var i = word.length - 1; i >= 0; i--)
    {
        wordReverse += word[i];
    }
    alert("That word backwards is: " + wordReverse);
}

function calculateTax()
{
    var cost = prompt("Enter the price of an item: ");
    alert("At a sales tax rate of 7.25%, the total cost of the item will be: " + (cost * 1.725))
}

function randomNum()
{
    var max = prompt("Enter the maximum number in the range: ");
    alert("Your random number is: " + Math.floor(Math.random() * max));
}

function howOld()
{
    var year = prompt("What year were you born?");
    alert("You are " + (today.getFullYear() - year) + " years old.");
}

var name = prompt("What's your name?", "Enter name here");
var mood = prompt("How are you doing today?", "Enter your mood here");
var today = new Date();

document.writeln("<h1>Today is " + (today.getMonth()+1) + "/" + today.getDate() + "/"  + today.getFullYear() +  " and the time is: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() +"</h1><br>");
document.writeln("<h2>Carly's Creations welcomes you,  " + name + "!</h2><br>");
document.writeln("<h2>We're glad you are doing " + mood + "!</h2>");



