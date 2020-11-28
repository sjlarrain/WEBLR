const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0]
const lunes3 = lunes.getElementsByClassName("three")[0];
const miercoles = document.getElementsByClassName("Miercoles")[0]
const miercoles1 = miercoles.getElementsByClassName("one")[0];
const miercoles2 = miercoles.getElementsByClassName("two")[0];
const miercoles3 = miercoles.getElementsByClassName("three")[0];
const viernes = document.getElementsByClassName("Viernes")[0];

// lunes
lunes1.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo poner atención en la jugada, buena comunicación, concentración.</p>";
    nodo.innerHTML += "<p>Se enumeran las personas y a través del numero y haciendo el gesto de un elefante o unas antenas, se llama a otro participante a través del numero. Si no hay comunicación se pierde.</p>";
})
lunes2.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Juego de azar, poner atención y escuchar a quien dice los números.</p>";
    })
lunes3.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p> La idea es que en parejas, uno de los jugadores le muestra un puño que contiene “X” pelotitas, y el otro jugador debe adivinar si tiene un número de pelotitas impar o par.</p>";
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
    nodo.innerHTML = "<p>Los Objetivos son socializar, reaccionar frente al accionar del compañero, usar estrategia a favor del desempeño personal</p>";
    nodo.innerHTML += "<p>Se reparte 13 cartas y se deben poner en el centro una carta de una pinta determinada. El de mayor valor se lleva todas las cartas. Finalmente cuando un jugador alcanza todos los corazones y la queen de pic gana la partida.</p>"
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivoRapidez mental, estrategia.</p>";
    nodo.innerHTML += "<p>Es el juego del clásico uno, donde se roban cartas y se van botando. Hay que lograr quedarse con una y gritar ¡UNO! y además lograr deshacerse de esa carta.</p>"
})

miercoles3.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p> Los objetivos son Rapidez mental, memorizar palabras y escribir rápido.</p>";
    nodo.innerHTML += "<p>Se definen unas categoría y despues se seleccionan letras al azar. Posteriormente deben lograr rellenar cada una de esas categorías y gritar ¡Stop! cuando todas las categorías hayan sido rellenadas.</p>"
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
viernes.addEventListener("mouseover", ()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "Es un juego de estrategia donde los jugadores deben completar ciertas tareas. Sin embargo entre los jugadores hay un impostor que intentará evitar que los jugadores completen las tareas y por lo tanto saboteará y matara tripulantes. Tambiéns se gana encontrando al impostor";
})
viernes.addEventListener("mouseout", ()=>{
    viernes.style = "background-color:darkred;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "";
})