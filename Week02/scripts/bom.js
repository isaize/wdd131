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