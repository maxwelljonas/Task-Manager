const input = document.getElementById('inputValue');
const addButton = document.getElementById('todoButton')
const tasks = document.getElementById('toDosContainer');



var todos = [
    { id: 1, title: "Do Laundry", status: "Incomplete" },
    { id: 2, title: "Go for a run", status: "Complete" },
    { id: 3, title: "Buy groceries", status: "Incomplete" },
    { id: 4, title: "Take siesta", status: "Incomplete" }
];

    addButton.addEventListener('click', function() {
        Additem();
    })


function updateUI () {
    tasks.innerHTML = '';
    for (let i=0; i<todos.length; i++) {
        // console.log(todos[i]);
        var item = document.createElement('div')
        item.className = 'todoItem';
        item.id = 'todoItem_'+ i;


        var content = document.createElement('div')
        content.className = 'content'
        content.textContent = todos[i].title;

        var holder = document.createElement('div')
        holder.className = 'action'


        var edit = document.createElement('button')
        edit.className = 'Button'
        edit.innerText = 'Edit'

        edit.addEventListener('click', function () {
            editTask(i)
        })

        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.className = 'check'

        var dlt = document.createElement('button')
        dlt.className = 'Button'
        dlt.innerText = 'Delete'

        dlt.addEventListener('click', function() {
            deleteItem(i)
        })

        holder.appendChild(edit)
        holder.appendChild(checkbox)
        holder.appendChild(dlt)

        item.appendChild(content)
        item.appendChild(holder)

        tasks.appendChild(item)
    }
}

function deleteItem(item_index) {
    todos.splice(item_index, 1);
    updateUI();
}

function Additem () {
    var thing = document.getElementById('inputValue');
    var error = document.getElementById('errorText');

    if (thing.value !== '') {
        todos.push(thing.value);
        thing.value = '';
        error.style.display = 'none';
    }
    else {
        error.style.display = 'block';
    }
    
    updateUI();
}

function editTask(item_index) {
    var selected = document.getElementById('todoItem_' + item_index);

    // Get the existing content text
    var existingContent = todos[item_index];

    // Create an input element
    var inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = existingContent;

    // Replace the content div with the input field
    selected.replaceChild(inputField, selected.querySelector('.content'));


    // Add a Save button to apply changes
    var saveButton = document.createElement('button');
    saveButton.className = 'Button';
    saveButton.innerText = 'Save';

    var cancelButton = document.createElement('button');
    cancelButton.className = 'Button';
    cancelButton.innerText = 'Cancel';


    let action_box = selected.querySelector('.action');
    action_box.innerHTML=''
    // console.log(action_box)
    

    // Define a function to save the changes
    saveButton.addEventListener('click', function () {
        todos[item_index] = inputField.value.trim();
        updateUI();
    });
    cancelButton.addEventListener('click', function () {
        updateUI();
    });

    // Append the Save button
    action_box.appendChild(saveButton);
    action_box.appendChild(cancelButton);
}


updateUI();
