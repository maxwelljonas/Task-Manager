const input = document.getElementById('inputValue');
const addButton = document.getElementById('todoButton')
const tasks = document.getElementById('toDosContainer');

var todos = ['Do Laundry','Get ready for work','Go to work', 'Take a cab','Return Home'];

    addButton.addEventListener('click', function() {
        Additem();
    })


function updateUI () {
    tasks.innerHTML = '';
    for (let i=0; i<todos.length; i++) {
        // console.log(todos[i]);
        var item = document.createElement('div')
        item.className = 'todoItem'

        var content = document.createElement('div')
        content.className = 'content'
        content.textContent = todos[i];

        var holder = document.createElement('div')
        holder.className = 'action'


        var edit = document.createElement('button')
        edit.className = 'editButton'
        edit.innerText = 'Edit'

        edit.addEventListener('click', function () {
            editTask(i) 
        })

        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.className = 'check'

        var dlt = document.createElement('button')
        dlt.className = 'deletebutton'
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

function editTask (item_index) {
    var newContent = prompt('Enter the new task: ', todos[item_index]);
    if (newContent !== null) {
        todos[item_index] = newContent.trim()
        updateUI();
    }
}

updateUI();
