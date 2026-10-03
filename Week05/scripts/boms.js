//declare three variables that hold references to the input, button, and list elements.
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

//Create a li element that will hold each entry's chapter title and an associated delete button
//const li = document.createElement("li");
//const deleteButton = document.createElement("button");

//Populate the li element variable's textContent or innerHTML with the input value
//li.textContent = input.value;

//Set the delete button's textContent to ❌
//deleteButton.textContent = "❌";

//Append the delete button to the li element
//li.append(deleteButton);
//Append the li element variable to the unordered list in your HTML
//list.append(li);

//Create a click event listener for the Add Chapter button with addEventListener.
button.addEventListener('click', function(){
    console.log('Button clicked')
    if (input.value ==''){
        input.focus
        return
    }
    const li = document.createElement('li')
    li.textContent = input.value
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "❌"
    deleteButton.addEventListener('click', function(){
        li.remove()
    })
    li.append(deleteButton)
    list.append(li)
})
// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
