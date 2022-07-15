// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');

// loadAllEventLlisteners()


// loadEventListeners();

// function loadEventListeners(){
//      form.addEventListener('submit', addTasks);
//      clearBtn.addEventListener('click', allClear);
//      taskList.addEventListener('click', removeTask);
// }


//  function addTasks(e){
//      if(taskInput.value === ''){
//      alert('Please add a Task');
//      e.preventDefault();

//      }
// ///
// const li = document.createElement('li');
// li.className = 'collection-item';
// li.appendChild(document.createTextNode(taskInput.value));
// const link = document.createElement('a');
// link.className =('delete-item secondary-content');
// link.innerHTML = '<i class="fa fa-remove"></i>';
// li.appendChild(link);
// taskList.appendChild(li);

// taskInput.value = '';

//      e.preventDefault();
//  }

//  function removeTask(e){
//      if(e.target.parentElement.classList.contains('delete-item'))


//      e.target.parentElement.parentElement.remove();
//  }


// function allClear(){
//      taskList.innerHTML='';
// }




// loadEventListeners();

// function loadEventListeners(){
//      form.addEventListener('submit', addTasks);
//      taskList.addEventListener('click' , clearTask);
//      clearBtn.addEventListener('click', allClear);
//      filter.addEventListener('keyup', filterTasks);
// }

//      function addTasks(e){
//           if(taskInput.value==='')
//           alert('Please add Tasks');

// const li = document.createElement('li');
// li.className = 'collection-item';
// li.appendChild(document.createTextNode(taskInput.value));
// const link = document.createElement('a');
// link.className= 'delete-item secondary-content';
// link.innerHTML= '<i class="fa fa-remove"></i>';
// li.appendChild(link);
// taskList.appendChild(li);

//           taskInput.value ='';
//           e.preventDefault();
//      }

// function clearTask(e){
//      if(e.target.parentElement.classList.contains('delete-item'));

//      e.target.parentElement.parentElement.remove();
// }

// function allClear(){
//      taskList.innerHTML='';
// }

// function filterTasks(e){
//      const text= e.target.value.toLowerCase();

//      document.querySelectorAll('.collection-item').forEach
//      (function(task){
//           const item = task.firstChild.textContent;
//           if(item.toLowerCase().indexOf(text) != -1){
//                task.style.display  = 'block';
//           }else
//           task.style.display  = 'none';
     

//      });     
// }

// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');


// loadEventListeners();

// function loadEventListeners(){
//      form.addEventListener('submit', addTasks);
//      taskList.addEventListener('click', clearTask);
//      clearBtn.addEventListener('click', clearTasks);
//      filter.addEventListener('keyup', filterTasks);
//      // document.addEventListener('DOMContentLoaded', getTasks);
// }

//  function addTasks(e){
//      if(taskInput.value ==='')
//      alert('Please add a Task');


// const li = document.createElement('li');
// li.className= ('collection-item');
// li.appendChild(document.createTextNode(taskInput.value));
// const link= document.createElement('a');
// link.className= ('delete-item secondary-content');
// link.innerHTML= '<i class="fa fa-remove"></i>'
// li.appendChild(link);
// taskList.appendChild(li);


// // storeTaskInLocalStorage(taskInput.value);

//      taskInput.value='';
//      e.preventDefault();
//  }

//  function clearTask(e){
//      if(e.target.parentElement.classList.contains('delete-item'));

//      e.target.parentElement.parentElement.remove();

//      // removeTaskFromLocalStorage
//      // (e.target.parentElement.parentElement);
//  }


//  function clearTasks(){
//      taskList.innerHTML='';

   
//  }


// function filterTasks(e){
//      const text = e.target.value.toLowerCase();

//      document.querySelectorAll('.collection-item').forEach(
//           function(task){
//                const item= task.firstChild.textContent;
//                if(item.toLowerCase().indexOf(text)!= -1){
//                     task.style.display='block';
//                }else{
//                     task.style.display='none';

//                }
//           }
//      );
// }     


// function storeTaskInLocalStorage(task){
//      let tasks;
//      if(localStorage.getItem('tasks')===null){
//           tasks= [];
//      }else{
//           tasks = JSON.parse(localStorage.getItem('tasks'));
//      }
//      tasks.push(task);

//      localStorage.setItem('tasks',JSON.stringify(tasks));

// }

// function getTasks(){
//      let tasks;
//      if(localStorage.getItem('tasks')===null){
//           tasks= [];
//      }else{
//           tasks = JSON.parse(localStorage.getItem('tasks'));
//      }
//      tasks.push(task);

//      localStorage.setItem('tasks',JSON.stringify(tasks));


// tasks.forEach(function(task){
//           const li = document.createElement('li');
//           li.className= ('collection-item');
//           li.appendChild(document.createTextNode(task));
//           const link= document.createElement('a');
//           link.className= ('delete-item secondary-content');
//           link.innerHTML= '<i class="fa fa-remove"></i>'
//           li.appendChild(link);
//           taskList.appendChild(li);
//           });
      






// function removeTaskFromLocalStorage(taskItem){
//      let tasks;
//      if(localStorage.getItem('tasks')===null){
//           tasks= [];//      }else{
//           tasks = JSON.parse(localStorage.getItem('tasks'));
//      }

//      tasks.forEach(function(task, index){
//           if(taskItem.textContent===task){
//                tasks.splice(index, 1);
//           }     
//      localStorage.setItem('tasks' ,JSON.stringify(tasks));
//      })
// }



// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');


// function loadEventListeners() {
//      // document.addEventListener('DOMContentLoaded', getTasks);
//      form.addEventListener('submit', addTask);
//      taskList.addEventListener('click', removeTask);
//      // clearBtn.addEventListener('click', clearTasks);
//      // filter.addEventListener('keyup', filterTasks);
// }

// function addTask(e){
// if(taskInput.value === '') {
//      alert('Add something');
//      taskInput.value='';
//      e.preventDefault();
// }



// const li = document.createElement('li');
// li.className = 'collection-item';
//  li.appendChild(document.createTextNode(taskInput.value));
//  const link = document.createElement('a');
//  link.className = 'delete-item secondary-content';
//  link.innerHTML = '<i class="fa fa-remove"></i>';
//  li.appendChild(link);
//  taskList.appendChild(li);

// 

//  


//  storeTaskInLocalStorage(taskInput.value);

// taskInput.value='';
//  e.preventDefault();
// }

// function storeTaskInLocalStorage(task){
// let tasks;
// if (localStorage.getItem('tasks') === null){
//      tasks= [];
//      }else{
//           tasks = JSON.parse(localStorage.getItem('tasks'));
//      }    
//      tasks.push(task);
     
//      localStorage.setItem('tasks', JSON.stringify(task));

// }

// // function getTasks(){
// //      let tasks;
// //      if (localStorage.getItem('tasks') === null){
// //           tasks= [];
// //           }else{
// //                tasks = JSON.parse(localStorage.getItem('tasks'));
// //           } 

// //      tasks.forEach(function(task){
// //           const li = document.createElement('li');
// //           li.className = 'collection-item';
// //           li.appendChild(document.createTextNode(task));
// //           const link = document.createElement('a');
// //           link.className = 'delete-item secondary-content';
// //           link.innerHTML = '<i class="fa fa-remove"></i>';
// //           li.appendChild(link);
// //           taskList.appendChild(li)

// //           });
// // }

// function removeTask(e){
// if(e.target.parentElement.classList.contains('delete-item')){
//      if(confirm('Are you sure?'));
// }


//      e.target.parentElement.parentElement.remove();
// }
     


// function clearTasks(e){
//      taskList.innerHTML='';
//      e.preventDefault();
// }




// function filterTasks(e){
//      const text= e.target.value.toLowerCase();

//      document.querySelectorAll('.collection-item').forEach(
//      function(task){
//                const item = task.firstChild.textContent;

//                if(item.toLowerCase().indexOf(text) != -1){
//                     task.style.display = 'block';
//                }else {
//                     task.style.display = 'none';

//                }
//           });
// 

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


loadEventListener();

function loadEventListener(){
     form.addEventListener('submit', addTask);
     taskList.addEventListener('click', clearTask);
     clearBtn.addEventListener('click',clearTasks);
     filter.addEventListener('keyup', filterTask);
}

     function addTask(e){
          if(taskInput.value ==='')
          alert('Please add a Task');

          e.preventDefault();

     
     const li =document.createElement('li');
     li.className=('collection-item');
     li.appendChild(document.createTextNode(taskInput.value));
     const link= document.createElement('href');
     link.className=('delete-item secondary-content');
     link.innerHTML= '<i class="fa fa-remove"> </i>';
     li.appendChild(link);
     taskList.appendChild(li);
     
     
     taskInput.value='';
     e.preventDefault();
     
     }


     function clearTask(e){

          e.target.parentElement.classList.contains('delete-item');

          e.target.parentElement.parentElement.remove();
     }

     function clearTasks(){
          taskList.innerHTML='';
     }

     function filterTask(e){
          const text = e.target.value.toLowerCase();

     document.querySelectorAll('.collection-item').forEach(
          function(task){
                const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text)!= -1){
               task.style.display= 'block';
            }else
            task.style.display= 'none';

          });
          e.preventDefault();
     }