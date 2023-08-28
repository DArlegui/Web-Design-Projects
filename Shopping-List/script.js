const itemForm = document.getElementById("item-form"); //Form
const itemInput = document.getElementById("item-input"); //Input inside the
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  //Validation
  if (newItem === "") {
    alert("Please add something");
    return;
  }

  //Create List Item
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));

  //Creating a new button and appending it
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = "";
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;

  //Creating an icon inside this function instead
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  button.appendChild(icon); //Appending the icon inside button
  return button;
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems() {
  console.log("works");
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
