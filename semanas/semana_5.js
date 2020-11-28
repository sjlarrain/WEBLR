const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0];
const miercoles = document.getElementsByClassName("Miercoles")[0]
const miercoles1 = miercoles.getElementsByClassName("one")[0];
const miercoles2 = miercoles.getElementsByClassName("two")[0];
const viernes = document.getElementsByClassName("Viernes")[0];
const viernes1 = viernes.getElementsByClassName("one")[0];
const viernes2 = viernes.getElementsByClassName("two")[0];


// lunes
lunes1.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo trabajar <ul> <li>Motricidad fina</li><li>Toleracia</li><li>Coordinacion óculo-manual</li><li>Reflejos</li> </ul></p>";
    nodo.innerHTML += "<p>Con 5 piedras debe hacerlas lanzarlas y atraparlas de distintas formas. En el link a continuación pueden ver una explicación mas profunda.</p>";
})
lunes2.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Trabajando en equipo deben ver que elementos son necesarios para poder llegar a uan estación de la NASA. Los elementos los podemos encontrar en el siguiente link.</p>";
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

// miercoles
miercoles1.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Dentro de un grupo vía una encuesta deben hacer ciertas preguntas. Luego, en grupos mas pequeños intentar acertar a esos porcentajes.</p>";
    nodo.innerHTML += "<p>Los objetivos son sociabilizar, argumentar y negociar.</p>"
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "Cantar <p>Do - Re - Mi - Si - Si ,</p><p>Do - Re - Mi - Si - Si ,</p><p>este aplauso es para ti</p><p>Do - Re - Mi - Si - Si ,</p><p>Do - Re - Mi - Si - Si ,</p>";
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
// viernes1.addEventListener("mouseover",()=>{
//     viernes.style = "background-color:black;";
//     const nodo = viernes.getElementsByClassName("informacion")[0];
//     nodo.innerHTML = "<p>fomentar el trabajo en equipo, experiencias de liderazgo, colaboración, creatividad e incluso frustración. "
//     nodo.innerHTML += "Los miembros del equipo deben intetar adivinar el ruido de un animal eligido por ellos</p>"
// })

// viernes2.addEventListener("mouseover",()=>{
//     viernes.style = "background-color:black;";
//     const nodo = viernes.getElementsByClassName("informacion")[0];
//     nodo.innerHTML = "Juego de coordinación, para felicitar a los ganadores y motivar a todos los participantes del juego. "
// })

// viernes1.addEventListener("mouseout",()=>{
//     viernes.style = "background-color:darkred;";
//     const nodo = viernes.getElementsByClassName("informacion")[0];
//     nodo.innerHTML = ""
// })

// viernes2.addEventListener("mouseout",()=>{
//     viernes.style = "background-color:darkred;";
//     const nodo = viernes.getElementsByClassName("informacion")[0];
//     nodo.innerHTML = ""})
