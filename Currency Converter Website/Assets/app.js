// currency converter application

//console.log("app.js is conected!!")

// variables => var,let and const

// let coffee = "brew";
// coffee = "nescafe";
//console.log(coffee);

// functions
// function grinder(items)
// {
//     console.log("grinding...", items);
// }

// grinder("garlic");
// grinder("tomatoes");

// function add(num1,num2)
// {
//     console.log(num1+num2)
// }
// add(2,3);

function joined()
{
    // console.log("joined function called");
    let title = document.getElementById("title");
    // console.log(title);
    title.innerHTML = "Thanks for Joining the masterclas live! 🥰"
    let btn = document.getElementById("btn");
    btn.style.display = "none";
}

function usdToInr()
{
    let usd = document.getElementById("usd").value;
    let inr = (usd * 82.68);
    document.getElementById("inr").innerText = inr;
}