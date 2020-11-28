const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0];
const miercoles = document.getElementsByClassName("Miercoles")[0]
const miercoles1 = miercoles.getElementsByClassName("one")[0];
const miercoles2 = miercoles.getElementsByClassName("two")[0];
const miercoles3 = viernes.getElementsByClassName("three")[0];
const viernes = document.getElementsByClassName("Viernes")[0];
const viernes1 = viernes.getElementsByClassName("one")[0];
const viernes2 = viernes.getElementsByClassName("two")[0];
const viernes3 = viernes.getElementsByClassName("three")[0];

lunes1.addEventListener("mouseover",()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo Potenciar la rapidez mental, poner en práctica la memoria fotográfica, conocer nuevas marcas y divertirse. </p>";
    nodo.innerHTML += "<p>Se van mostrando logos de las marcas y deben ir anotando a que marca corresponde. Finalmente el que más identificó gana.</p>"
})

lunes2.addEventListener("mouseover",()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>El juego tiene como objetivo planificar estrategias para resolver el rosco de manera eficiente, potenciar la rapidez mental a la hora de responder y trabajar la capacidad de retención a corto plazo</p>";
    nodo.innerHTML += "<p>Hay una palabra que esta representado por cada palabra del abcedario. Finalmente el moderador hace una descripción de las palabras y el jugador debe ser capaz de acertar a la mayor cantidad de letras en el tiempo dado.</p>"
})


lunes1.addEventListener("mouseout",()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""
})

lunes2.addEventListener("mouseout",()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""})

// Miercoles

miercoles1.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo crear estrategias, fortalecer la atención y la memoria y socializar.</p>";
    nodo.innerHTML += "<p> Se escoje un personaje y despues se intenta adivinar el del oponente a través de preguntas dicotómicas.</p>"
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>En el juego se busca ampliar los conocimientos de cultura general, socializar, poner en movimiento y activar el cuerpo, de manera tal que sirva para generar endorfinas y pasar un buen rato.</p>";
    nodo.innerHTML += "<p>Se van haciendo preguntas de distintos temas dependiendo del lugar que caen en el tablero. Pueden ser de deporte, cine o geografía entre ellas. Dependiendo de si acierta o no debe pagar en ejercicios físicos.</p>"
})

miercoles3.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Busca desarrollar la creatividad, visibilizar que un mismo planteamiento tiene muchas respuestas, trabajar la reacción y respuesta rápida frente a distintas situacione</p>";
    nodo.innerHTML += "<p>Se hace una pregunta y los miembros por su cuenta escriben una solución. Despues se comparte esa solución y se vota por cual es la mejor. </p>"
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

miercoles3.addEventListener("mouseout",()=>{
    miercoles.style = "background-color:darkred;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""})

// viernes
viernes1.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Es igual a Bachillerato pero es online</p>"
})

viernes2.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo el trabajo en equipo, creatividad, compartir, socializar y desarrollar comunicación no verbal.</p>";
    nodo.innerHTML += "<p>Hay que lograr comunicar una palabra a través de descripciones y actuaciones.</p>"
})

viernes3.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo fortalecer la memoria, concentración, trabajar la tolerancia a la frustración.</p>";
    nodo.innerHTML += "<p>Consiste en acertar a una canción una vez de escucharla.</p>"
})


viernes1.addEventListener("mouseout",()=>{
    viernes.style = "background-color:darkred;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""
})

viernes2.addEventListener("mouseout",()=>{
    viernes.style = "background-color:darkred;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""})

viernes3.addEventListener("mouseout",()=>{
    viernes.style = "background-color:darkred;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""})
