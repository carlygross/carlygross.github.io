// The work submitted here is my work. I have not copied and pasted code into these pages. I have gotten help frpm these sites:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/jsref/event_onclick.asp
// Carly Gross Friday, October 1 4:00pm

// Determines which type of polygon it is
function getShape(sides)
{
    if(sides == 0)
    {
        alert("A shape with 0 sides doesn't exist!");
    }
    else if (sides == 1)
    {
        alert("Monogon");
    }
    else if (sides == 2)
    {
        alert("Bigon");
    }
    else if (sides == 3)
    {
        alert("Triangle");
    }
    else if (sides == 4)
    {
        alert("Quadrilateral");
    }
    else if (sides == 5)
    {
        alert("Pentagon");
    }
    else if (sides == 6)
    {
        alert("Hexagon");
    }
    else if (sides == 7)
    {
        alert("Heptagon");
    }
    else if (sides == 8)
    {
        alert("Octagon");
    }
    else if (sides == 9)
    {
        alert("Nonagon");
    }
    else if (sides == 10)
    {
        alert("Decagon");
    }
}

// Verifies that the number entry is valid, if not it prompts the user for a new number
function validateEntry(sides)
{
    // Prompts user for a nw number if their entry is out of the range
    while (sides > 10 || sides < -10)
    {
        sides = prompt("Invalid entry. The Chockablock Gorilla would like your number...");
    }
    
    // Makes the user entry a positive number if it is negative
    if (sides < 0)
    {
        sides = Math.abs(sides);
    }

    // Rounds entry to nearest whole integer
    sides = Math.round(sides);

    return sides;
}

function nameThatPolygon()
{
    var number = prompt("The Chockablock Gorilla would like your number...");
    number = validateEntry(number);
    getShape(number);
}