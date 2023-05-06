class todo extends HTMLUListElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const div = document.createElement('div');
        shadow.appenddChild(div);

    }
}


// for the buttons.... 
const add = document.querySelector('.add');

const remove = document.querySelector('.remove');
remove.disabled = true;

let todoList = document.getElementById('todoList');
// list of todo options
let todoListOptions =  ["Clean", "Study", "Work", "Lift", "Homework"];

// actual list of things to do
let mine = []

// adding a task
add.onclick = function(){

    rand = Math.floor(Math.random() * todoListOptions.length)
    mine.push(todoListOptions[rand]);

    let li = document.createElement('li');
    li.innerText = todoListOptions[rand];
    todoList.appendChild(li)

    add.disbled = false;
    remove.disabled = false;
};

// Completing a task
remove.onclick = function(){

    var r = document.getElementById('todoList').getElementsByTagName('li').length;
    rand = Math.floor(Math.random() * r);
    var elem = document.getElementById('todoList');
    elem.removeChild(elem.children[rand]);

    
    remove.disabled = false;
    add.disabled = false;
};