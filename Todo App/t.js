let todoList = [
 {
    items : 'buy mild' ,
    dueDate : '4/5/25'
},
{
    items : 'study time' ,
    dueDate : '5/5/25'
}

];

displayItems();


function addTodo(){
   let inputElement = document.querySelector('#todo-input');
   let inputDateElement = document.querySelector('#todo-date');

   let todoitem = inputElement.value;
   let todoDate = inputDateElement.value;

   todoList.push({items : todoitem , dueDate : todoDate});
      inputElement.value = '';
      inputDateElement.value ='';

      displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('#todo-container');


    let newhtml = '';

    for(let i =0 ; i< todoList.length ; i++){
        let todoitem = todoList[i].items;
        let duedates = todoList[i].dueDate;

        newhtml += `
       
        <span>${todoitem}</span>
    
        <span>${duedates}</span>
        <button  class="btn-delete" onclick = "todoList.splice(${i} , 1) ; displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newhtml;
}
    