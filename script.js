const arr = JSON.parse(localStorage.getItem('todos')) || [];

function render() {
    let innerhtml = '';
    arr.forEach((todo,index) => {
      
        const { name, duedate } = todo;

        const html = `
            <div class="js-flex">
                <div class="js-first">${name}</div>
                <div class="js-middle">${duedate}</div>
                <div class="js-last"><button class="js-bt" onclick="deleteTodo(${index})">Delete</button></div>
            </div>`;

        innerhtml += html;
    });
 

    document.querySelector('.js-result').innerHTML = innerhtml;
}

function add() {
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-dateinput');
    const duedate = dateInputElement.value;

    arr.push({ name, duedate });

    inputElement.value = '';
    dateInputElement.value = '';

    saveToLocalStorage();
    render();
}

document.body.addEventListener('keydown',(event)=>{

    if(event.key=='Enter'){
        add();
    }
    else if(event.key=='Delete'){
        deleteTodo();
    }

})

function deleteTodo(index) {
    arr.splice(index, 1);
    saveToLocalStorage();
    render();
}

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(arr));
}

// Initial rendering
render();
