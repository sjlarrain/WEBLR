const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0];
const lunes3 = lunes.getElementsByClassName("three")[0];
const miercoles = document.getElementsByClassName("Miercoles")[0]
const miercoles1 = miercoles.getElementsByClassName("one")[0];
const miercoles2 = miercoles.getElementsByClassName("two")[0];
const miercoles3 = miercoles.getElementsByClassName("three")[0];
const viernes = document.getElementsByClassName("Viernes")[0];
const viernes1 = viernes.getElementsByClassName("one")[0];
const viernes2 = viernes.getElementsByClassName("two")[0];
const viernes3 = viernes.getElementsByClassName("three")[0];


lunes1.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo socializar y conocerse mejor.</p>";
    nodo.innerHTML += "<p>Los participantes van diciendo que no han hecho y la gente que lo hizo prende la camara y cuenta la historia</p>";
})
lunes2.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo sociabilizar a través del desarrollo del juego.</p>";
    nodo.innerHTML += "<p>Se van haciendo preguntas si uno sube por una escalera o si cae por una serpiente para conocer mejor con quién se juega.</p>";
})
lunes3.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p> Es un juego que tiene como objetivo practicar estrategia potenciar la concentración y socializar.</p>";
    nodo.innerHTML += "<p> Es un gato (el juego) que cada casilla es un gato propiamente tal, hay que ganar cada gato y lograr ganar el gato general."
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
miercoles1.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>El objetivo del juego es potenciar el vocabulario, trabajo en equipo y creación de estratégias.</p>";
    nodo.innerHTML += "<p> Se muestra un tablero con distintas palabras. Cada equipo tiene asignadas algunas palabras que el espía debe intentar que su equipo adivine. ¿Cómo? El espía puede decir una palabra que relacione aquellas cartas que quiere que seleccione su equipo y el número de cartas relacionadas con la palabra dicha. Gana quien adivine todas las palabras.</p>"
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Busca ejercitar la creatividad; relacionarse con compañeros en un ambiente lúdico; divertirse.</p>";
    nodo.innerHTML += "<p>Se hace un dibujo de un tema y los demas participantes deben adivinar la palabra involucrada.</p>"
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
viernes1.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo desarrollar la capacidad de observar detalladamente y en perspectiva. Trabajar efectivamente en equipo. Desarrollo de estrategia y velocidad.</p>"
    nodo.innerHTML += "<p>Se colocan dos imagenes y se busca las diferencias entre las dos imagenes</p>"
})

viernes2.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Los objetivos de este juego son  ser estratégicos, usar las probabilidades y matemáticas básicas de forma divertida, entretenerse y fomentar la creatividad</p>";
    nodo.innerHTML += "<p>Se hace una pregunta sobre un tema libre y se hace una estimación de cuanta gente lo ha hecho. Se va subiendo la apuesta hasta que alguien duda.</p>"
})

viernes3.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo ejercitar la memoria, trabajo en equipo, socializar con los compañeros y entretenerse.</p>";
    nodo.innerHTML += "<p>El moderador va agregando palabras y los participantes tienen que ir repitiendo todas ademas de la agregada. Hay que llegar hasta las 10 palabras</p>"
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