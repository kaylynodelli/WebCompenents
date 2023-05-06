
// I worked in a group with others and we cannot figure out why my task counts won't show up.

// I don't know if it's maybe my browser or human error, but I have sat on it for a few hours and
// I think I am just going to turn it in like this. I don't know why task counter won't show. 
// I hope I won't lose too many points. 

class TaskCounter extends HTMLParagraphElement{
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const listParent = this.parentNode;

        // functions that count the tasks
        function countTasks(node){
            const task = node.getElementsByTagName('li').length;
            return task;
        }
          
        const count = `Tasks: ${countTasks(listParent)}`;


        const text = document.createElement('span');
        text.textContent = count;

        shadow.appendChild(text);

        setInterval(function(){
            const count = `Tasks: ${countTasks(listParent)}`;
            text.textContent = count;
        }, 200);
    }   
}
customElements.define('count-tasks', TaskCounter, { extends: 'p' });