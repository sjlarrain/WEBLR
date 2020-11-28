const miercoles = document.getElementsByClassName("Miercoles")[0]
const viernes = document.getElementsByClassName("Viernes")[0];

// lunes
// miercoles
miercoles.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo el trabajo en equipo, un gran trabajo cognitivo y creatividad</p>";
    nodo.innerHTML += "<p>La idea es que nos dan una palabra y debemos formar la mayor cantidad de palabras con esas letras.</p>"
})



miercoles.addEventListener("mouseout",()=>{
    miercoles.style = "background-color:darkred;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""
})

// viernes
viernes.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo la rapidez mental, memoria, socializar, trabajo bajo presión y conocimiento general</p>";
    nodo.innerHTML += "<p>La idea del juego es que aparece una ruleta con nombre genéricos, por ejemplo “alimentos” o “artefactos eléctricos”, entre otros. Luego se dan 60 segundos para mencionar la mayor cantidad de cosas relacionadas al tema. Los jugadores se van turnando, al inicio de cada turno se hace girar la ruleta, por lo que a cada jugador le tocará un tema diferente.</p>"
})



viernes.addEventListener("mouseout",()=>{
    viernes.style = "background-color:darkred;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""
})
