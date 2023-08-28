const itemForm = document.getElementById("item-form"); //Form
const itemInput = document.getElementById("item-input"); //Input inside the
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

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

  //Add li to the DOM
  itemList.appendChild(li);

  checkUI();
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
    //if (confirm("Are you sure?")) {
    e.target.parentElement.parentElement.remove();
    checkUI();
    //}
  }
}

function clearItems() {
  console.log("works");
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

function filterItems(e) {
  const items = itemList.querySelectorAll("li");
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll("li");

  console.log(items);
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemFilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemFilter.style.display = "block";
  }
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
itemFilter.addEventListener("input", filterItems);

checkUI();
