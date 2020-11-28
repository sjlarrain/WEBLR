const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0]
const lunes3 = lunes.getElementsByClassName("three")[0];
const lunes4 = lunes.getElementsByClassName("forth")[0]
const miercoles = document.getElementsByClassName("Miercoles")[0]
const miercoles1 = miercoles.getElementsByClassName("one")[0];
const miercoles2 = miercoles.getElementsByClassName("two")[0];
const viernes = document.getElementsByClassName("Viernes")[0];

// lunes
lunes1.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo visibilizar una discapacidad como es quedarse sin los miembros superiores.</p>";
})
lunes2.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo la creatividad mental, conocimiento y relacionar imágenes.</p>";
    nodo.innerHTML += "<p>Se deben pasar una serie de emojis con un tema o sentido e intentar adivinarlos</p>";
})
lunes3.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p> Se debe relacionar imágenes, para descubrir el mensaje oculto.</p>";
})
lunes4.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo practicar la memoria de corto plazo, expresión corporal.</p>";
    nodo.innerHTML += "<p>El juego consiste en mandar un mensaje entre un grupo y que llegue posible.</p>";
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

lunes4.addEventListener("mouseout", ()=>{
    lunes.style = "background-color:darkred;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "";
})
// miercoles
miercoles1.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo el trabajo en equipo, un gran trabajo cognitivo y creatividad</p>";
    nodo.innerHTML += "<p>Consiste en resolver una serie de pruebas, entre el agente X y el Z. El link a continuación.</p>"
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo trabajar la creatividad y la imaginación.</p>";
    nodo.innerHTML += "<p>Se hacen dibujos y a través de ellos se crean una historia.</p>"
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
