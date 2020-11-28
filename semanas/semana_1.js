const lunes = document.getElementsByClassName("Lunes")[0];
const miercoles = document.getElementsByClassName("Miercoles")[0]
const miercoles1 = miercoles.getElementsByClassName("one")[0];
const miercoles2 = miercoles.getElementsByClassName("two")[0];
const viernes = document.getElementsByClassName("Viernes")[0];
const viernes1 = viernes.getElementsByClassName("one")[0];
const viernes2 = viernes.getElementsByClassName("two")[0];


lunes.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "Juego que tiene como objetivo conocer a nuestros compañeros. Se juega 'citandose' entre ellos y se propone un tema";
})
lunes.addEventListener("mouseout", ()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "";
})

miercoles1.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "Corresponde a un juego de estrategias donde uno debe intentar acertar el numero del oponente"
    nodo.innerHTML += "<ul>El juegador debe <li>Eligir un numero de X digitos </li> <li>Preguntar por numero </li> <li>Si acierta numero y posicion decir 'fama', solo numero 'toque' el resto nada </li> </ul>"
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "Es un juego donde deben cantar alegremente 'Palo Palito Palo E"
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
    nodo.innerHTML = "<p>fomentar el trabajo en equipo, experiencias de liderazgo, colaboración, creatividad e incluso frustración. "
    nodo.innerHTML += "Los miembros del equipo deben intetar adivinar el ruido de un animal eligido por ellos</p>"
})

viernes2.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "Juego de coordinación, para felicitar a los ganadores y motivar a todos los participantes del juego. "
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
