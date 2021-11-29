// https://www.w3schools.com/jsref/event_onclick.asp
// https://www.w3schools.com/howto/howto_css_dropdown.asp
// https://www.tutorialspoint.com/How-do-we-use-a-simple-drop-down-list-of-items-in-HTML-forms
// https://medium.com/wdstack/quick-blurb-generating-a-table-from-an-array-in-javascript-41386fd449a9

let people_test = ["Michael Scott", "Dwight Schrute", "Jim Halpert", "Andy Bernard", "Pam Beesly", "Kevin Malone", "Angela Martin", "Oscar Martinez", "Toby Flenderson"];
let salaries = [];
let people = [];


function addSalary()
{
    var salary = document.getElementById("salary").text;
    var name = document.getElementById("employee_name").text;

    people.push(name);
    salaries.push(salary);

    console.log(salaries[0]);

    /*for (var i = 0; i < people.length; i++)
    {
        if (name == people[i])
        {
            salaries.splice(i, 0, salary);
            console.log(salaries[i]);
        }

    }*/
}

function displayResults()
{
    var sum = 0;
    var average = 0;
    var highestSalary = 0;

    for (let i = 0; i < salaries.length; i++)
    {
        sum += salaries[i];
        if (salaries[i] > highestSalary)
        {
            highestSalary = salaries[i];
        }
    }

    
}

function displaySalary()
{
    let table = document.createElement('table');
    //console.dir(table);
    table.insertRow();
    console.log(table);
}