const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0];
const miercoles = document.getElementsByClassName("Miercoles")[0]
const viernes = document.getElementsByClassName("Viernes")[0];

// lunes



lunes1.addEventListener("mouseover",()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo la entrenar la rapidez mental y el trabajo en equipo</p>"
    nodo.innerHTML += "<p>A partir de una tabla con múltiples filas que contienen palabras cuyas letras están en desorden, los alumnos deben adivinar las palabras. Cada columna representa un tema, por lo que las palabras correspondientes a dicha columna se encuentran relacionadas entre sí.</p>"
})

lunes2.addEventListener("mouseover",()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Es un juego con un objetivo trabajar la concentración y memoria visual</p>"
    nodo.innerHTML += "<p> El profesor muestra por un par de segundos diversas imágenes, y luego le da un tiempo a los alumnos para que anoten las imágenes que recuerdan haber visto.</p>"
    nodo.innerHTML += "<p>Quien mas recuerde es el ganador</p>"
})

lunes1.addEventListener("mouseout",()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""
})

lunes2.addEventListener("mouseout",()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes .getElementsByClassName("informacion")[0];
    nodo.innerHTML = ""})
    
// miecoles 
miercoles.addEventListener("mouseover", ()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo la concentracion y la estrategia</p>";
    nodo.innerHTML += "<p>Se tienen 4 niveles de circulo uno dentro de otro. Se deben dividir en 8.</p>";
    nodo.innerHTML +=  "<p>Debe lograr juntar cuatro en linea vertical, horizontal o diagonal</p>";
})
miercoles.addEventListener("mouseout", ()=>{
    miercoles.style = "background-color:darkred;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "";
})

// viernes
viernes.addEventListener("mouseover", ()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Juego que tiene como objetivo socializar y ejercitar la memoria</p>";
    nodo.innerHTML += "<p>Se deben ir diciendose palabras y uniendolas. A medida que mas juegan mas palabras son y por lo tanto más hay que recordar</p>"
})
viernes.addEventListener("mouseout", ()=>{
    viernes.style = "background-color:darkred;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "";
})
// end