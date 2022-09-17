//ARREGLO VACIO PARA IR AGREGANDO LAS TAREAS
const tasks = [];
//PARA LLEVAR LA CUENTA REGRESIVA
let time = 0;
//CON UNA FUNCION LLAMADA SETINTERVAL PERMITE EJECUTAR UN PEDAZOI DE CODIGO CADA CIERTO TIEMPO
let timer = null;
//PARA DETENER EL TIEMPO
let timerBreak = null;
//ME VA A DECIR CUAL ES LA TAREA ACTUAL QUE SE ESTA EJECUTANDO
let current = null;
//Traemos los ids
const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');
const taskName = document.querySelector('#time #taskName');


renderTime();
renderTasks();
///EVENTOS
form. ('submit', e =>{
    //con esto anulamos el envio del formulario
    e.preventDefault();
    if (itTask.value != '' ) {
        createTask(itTask.value);
        //aqui dejamos el input vacio
        itTask.value = '';
        renderTasks();
    }
});
function createTask(value){
    //creamos un nuevo objeto como si fuese una nueva tarea
    const newTask = {
        //con la siquiente linea de codigo creamos un id Dinamico
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false
    };
    // con esto lo agregamos al array tasks
    tasks.unshift(newTask);
}
//inyeccion de HTML en un contenedor cada vez que se crea una nueva tarea or TASKS
function renderTasks() {
    const html = tasks.map(task =>{
        return `
        <div class="task">
            <div class="completed">${
                task.completed 
                ? `<span class="done">Done</span>`
                : `<button class="start-button" data-id="${task.id}">start </button>`
            }</div>
            <div class="title">${task.title}</div>

        </div>


        `;
    }); 
    //como el metodo map me trae un arreglo lo transformo a un string con el metodo join
    //luego cada uno de los elementos los cammbiamos con un espacio vavio
    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = html.join('');

    //botones para iniciar la cuenta regresiva
    // con el selector all puedo elegir un arreglo con las misma coincidencia de clases
    const startButtons = document.querySelectorAll('.task .start-button');
    startButtons.forEach(button =>{
        button.addEventListener('click', e=>{
        //aqui decimos que si no existe timer que entre por el condicional 
        if(!timer){
            const idT = button.getAttribute('data-id');
            startButtonHandler();
            button.textContent = "in progress...";
         }
        });
    });
}
function startButtonHandler(idT){
    time = 3;
    current = idT;
    const taskIndex = tasks.findIndex(task => task.idT == idT);
            //asi le colocamos el nombre de la actividad
    taskName.textContent = tasks[taskIndex].title;
    //para agregarle el tiempo necesitamos una funcion que vayya disminuyendo el tiempo
    timer = setInterval(() => {
        timeHandler(idT);
    }, 1000);
}
function timeHandler(idT){
    time--;
    renderTime();
    if(time == 0){
        clearInterval(timer);
        markCompleted(idT);
        timer = null;
        renderTasks();
        startBreak();
    }
}
 
function markCompleted(idT){
    const tasIndex = tasks.findIndex((task) => task.idT == idT);
    tasks[tasIndex].completed = true;
}
function startBreak(){
    time = 5 * 1;
    taskName.textContent = 'Beak';
    timerBreak = setInterval(() =>{
        timerBreakHandler();
    }, 1000);
}
function timerBreakHandler(){
    time--;
    renderTime();
    if(time == 0){
        clearInterval(timerBreak);
        current = null;
        timerBreak = null;
        taskName.textContent = '';  
        renderTasks();
    }
}
// con esta funcion mostramos el formato del tiempo
function renderTime(){
    const timeDiv = document.querySelector('#time #value');
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);
    timeDiv.textContent = `${minutes < 10 ? '0': "" }${minutes} : ${seconds < 10 ? '0' : "" }${seconds}`;
}  