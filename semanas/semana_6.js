const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0];
const miercoles = document.getElementsByClassName("Miercoles")[0]
const miercoles1 = miercoles.getElementsByClassName("one")[0];
const miercoles2 = miercoles.getElementsByClassName("two")[0];
const miercoles3 = miercoles.getElementsByClassName("three")[0];
const viernes = document.getElementsByClassName("Viernes")[0];
// lunes
lunes1.addEventListener("mouseover",()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo trabajar en equipo, estrategia y buena memoria</p>";
    nodo.innerHTML += "<p>Cada uno elige un personaje y el resto debe adivinar preguntando. El preguntado respondera SI o NO.</p>";
})

lunes2.addEventListener("mouseover",()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivos la coordinación y trabajo en equipo.</p>"
    nodo.innerHTML += "<p> Hay que contar del 1 al 10 sin <ul><li>Existir silencio mayor a 3 segundos</li><li>Interrumpirse</li><li>Repetir inmediatamente de turno</li></ul></p>"
})

lunes1.addEventListener("mouseout",()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""
})

lunes2.addEventListener("mouseout",()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes .getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""
})

// miercoles
miercoles1.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo observar el lenguaje no verbal y por otro lado sociabilizar.</p>";
    nodo.innerHTML += "<p>Se dicen las tres frases para que el resto pueda identificarlas. De esta forma tambien se pueden conocer</p>";
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivos practicar la memoria, funcionar bajo presión, aprender y culturizarse</p>";
    nodo.innerHTML += "<p> Se da un tema y hay que lograr decir la mayor cantidad de elementos sobre un tema. Por ejemplo estaciones de metro</p>"
})

miercoles3.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "Tiene como objetivo reconocer patrones. Se juega con las camaras de Zoom seleccionando al azar circulo o equis. De esta forma se deben formar los patrones conocidos.";
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
    nodo.innerHTML = ""
})
    
// viernes
viernes.addEventListener("mouseover",()=>{
    viernes.style = "background-color:white;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<div class='Feriado'> FERIADO </div>";
    nodo.innerHTML += '<img src ="../Imagenes/Bandera.jfif">';
    })

viernes.addEventListener("mouseout",()=>{
    viernes.style = "background-color:darkred;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""
})

