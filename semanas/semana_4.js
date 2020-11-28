const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0];
const miercoles = document.getElementsByClassName("Miercoles")[0]
const miercoles1 = miercoles.getElementsByClassName("one")[0];
const miercoles2 = miercoles.getElementsByClassName("two")[0];
const viernes = document.getElementsByClassName("Viernes")[0];
const viernes1 = viernes.getElementsByClassName("one")[0];
const viernes2 = viernes.getElementsByClassName("two")[0];


lunes1.addEventListener("mouseover",()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo  utilizar estratégia para el desarrollo personal, socializar y resolución de problemas a lo largo del transcurso del juego</p>"
    nodo.innerHTML += "<p>Uno debe rellenar una tabla que pueden encontrar en el link a continuacion</p>"
})

lunes2.addEventListener("mouseover",()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "Corresponde a un aplauso para felicitar"})

lunes1.addEventListener("mouseout",()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""
})

lunes2.addEventListener("mouseout",()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes .getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""})

// miercoles
miercoles1.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "Tiene como objetivo desarrollo del pensamiento estratégico, toma de decisiones y entender cómo piensa el rival."
    nodo.innerHTML += "<ul>El juegador debe: <li>Posicionar barcos en un tablero coordenado de 10 x 10.</li> <li>Preguntar posicion donde el oponente reponde agua o fuego. </li> <li>Intentar hundir todos los barcos antes que el oponente. </li> </ul>"
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo ser organizado estrátegico y tener un líder</p>";
    nodo.innerHTML += "<p>Se ponen ciertos sustativos y se deben anotar todos en una tabla con la letra dicha por el organizador. Se juega en equipos</p>";
})

miercoles1.addEventListener("mouseout",()=>{
    miercoles.style = "background-color:darkred;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""
})

miercoles2.addEventListener("mouseout",()=>{
    miercoles.style = "background-color:darkred;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""})

// viernes

viernes.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "Se hace una serie de misiones que hay que completar en un tiempo determinado. Hay que ser le primero en cumplirlas todas."
})

viernes.addEventListener("mouseout",()=>{
    viernes.style = "background-color:darkred;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""
})
