const inputtext = document.getElementById("input-text");

const listcontainer = document.getElementById("list-container");

function addTask(){ 
     if(inputtext.value === '')
        { 
            alert("You must write something!");
        }
     else
       { 
        //Creates a new list item 
        let li = document.createElement("li");
        //sets the content of the list item
        li.innerHTML = inputtext.value;
        //adds the list item to the container
        listcontainer.appendChild(li);
        //creates a span element, an inline container
        let span = document.createElement("span");
        //contains the code of the multiplication sign ×
        span.innerHTML ="\u00d7";
        //adds it the the li element
        li.appendChild(span);
        }

        //to liberate the space after writing on it,for not deleting the content yourself
        inputtext.value = "";
        saveData();
}

//This code adds an event listener to the listcontainer element, which listens for click events on any of its child elements.
//When any element inside listcontainer is clicked, the function(e) block will execute.
//The e parameter represents the event object, which provides information about the click, including the specific element that was clicked (e.target)
listcontainer.addEventListener("click", function(e){
    //it checks if the elt clicked is a list item
    //if it is it toggles the "checked" class,to execute the css for it 
    if(e.target.tagName === "LI")
        { 
            //to add or remove the checked class to that <li>
            e.target.classList.toggle("checked");
            saveData();
        }
    else if(e.target.tagName === "SPAN"){ 
        //removes the entire <li> element (the parent of the <span>) from the list
              e.target.parentElement.remove();
              saveData();
           }
           //this 3rd parameter false i don't get it
}, false);

//to store the data even after quitting the browser
//Using localStorage.setItem: The localStorage.setItem(key, value) method saves data in the browser’s localStorage. Here, "data" is the key and listcontainer.innerHTML (the HTML content of the list) is the value.
//saveData takes the current HTML content of listcontainer (likely the list of tasks) and saves it to localStorage with the key "data".
function saveData(){ 
    localStorage.setItem("data", listcontainer.innerHTML);
}

//to display the data whenever we get to the list:showTask pulls the data saved in localStorage under the key "data".
function showTask(){ 
    listcontainer.innerHTML= localStorage.getItem("data");
}
showTask();

