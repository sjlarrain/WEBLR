const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0]
const lunes3 = lunes.getElementsByClassName("three")[0];
const miercoles = document.getElementsByClassName("Miercoles")[0]
const miercoles1 = miercoles.getElementsByClassName("one")[0];
const miercoles2 = miercoles.getElementsByClassName("two")[0];
const miercoles3 = miercoles.getElementsByClassName("three")[0];
const viernes = document.getElementsByClassName("Viernes")[0];
const viernes1 = viernes.getElementsByClassName("one")[0];
const viernes2 = viernes.getElementsByClassName("two")[0];
const viernes3 = viernes.getElementsByClassName("three")[0];

// lunes
lunes1.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo ejercitar la capacidad de atención, fortalecer el desarrollo del lenguaje y la expansión del vocabulario y ejercitar la memoria.</p>";
    nodo.innerHTML += "<p>Se deben decir palabras por turno pero estas deben estar encadenadas. Esto se hace diciendo un a letra que comienza con la ultima letra de la palabra anteriormente dicha.</p>";
})
lunes2.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo  el uso de estrategias, trabajar en equipo, conocer diferentes personajes y divertirse.</p>";
    nodo.innerHTML += "<p>Se forman dos equipos para despues, respecto a ciertos personajes elegir uno. Luego el equipo a través de preguntas intentará obtener el personaje seleccionado por el equipo contrario.</p>";
})
lunes3.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p> Tiene como objetivo pasar un buen rato, practicar la concentración y potenciar el desarrollo cognitivo.</p>";
    nodo.innerHTML += "<p>Se establece un orden los jugadores deben llegar a el mayor numero posible evitando los 7 y los multiplos de 7. Cada vez que exista uno se debe aplaudir y se revierte el orden.</p>";
})

lunes1.addEventListener("mouseout", ()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "";
})

lunes2.addEventListener("mouseout", ()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "";
})

lunes3.addEventListener("mouseout", ()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "";
})

// miercoles
miercoles3.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Objetivo:  Identificar patrones en el juego, elaborar una estrategia y socializar.</p>";
    nodo.innerHTML += "<p>En un tablero hay tres perros y una liebre. Los perros cazadores deben arrinconar a la liebre para que no pueda llegar al final.</p>"
})

miercoles1.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Se desarrolla la rapidez mental, usar la memoria, aprender nuevos refranes.</p>";
    nodo.innerHTML += "<p>El anfitrión mostrará una serie de emojis que significan un refrán. Luego los participantes deben acertar a que refran hace referencia.</p>"
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo trabajar la creatividad y la imaginación.</p>";
    nodo.innerHTML += "<p>Se entrega una plantilla y despues los jugadores deben ser capaces de unir palabras respecto al tema entregado. El que tenga la mayor cantidad de palabras unidas gana.</p>"
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
    nodo.innerHTML = "<p>Tiene como objetivo el trabajo en equipo; mejorar coordinación, puntería y reflejos; desarrollar estrategia.</p>";
    nodo.innerHTML += "<p>Se juega en un tablero donde cada equipo debe meter la mayor cantidad de goles antes que se acabe el tiempo.</p>"
})

viernes2.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Desarrollar habilidades artísticas; desarrollar la creatividad; trabajar en equipo para lograr que el resultado final sea lo más parecido a lo escrito inicialmente; relajarse y pasarlo bien</p>";
    nodo.innerHTML += "<p>Se selecciona una palabra y a través de dibujos tienen que lograr que la palabra se mantenga. Finalmente hay que lograr que sea igual o minima variación.</p>"
})

viernes3.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Los objetivos son: trabajar la rapidez mental; potenciar la creatividad; aprender a decir las cosas con otras palabras que no solemos utilizar; ampliar el vocabulario; socializar con los compañeros</p>";
    nodo.innerHTML += "<p>Hay que adivinar una palabra evitando decir palabras que directamente se relacionan con esa palabra. Finalmente el que logra adivinar las palabras gana.</p>"
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
    