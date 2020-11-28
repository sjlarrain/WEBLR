const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0];
const miercoles = document.getElementsByClassName("Miercoles")[0]
const viernes = document.getElementsByClassName("Viernes")[0];

// lunes



lunes1.addEventListener("mouseover",()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene un objetivo de desarrollar una buena estrategia respecto al orden de las letras</p>"
    nodo.innerHTML += "<p>Para la realizacion del juego se necesita tener todas las letras del abecedario. Una persona debe hacer la descripciónde una palabra e intentar acertar</p>"
})

lunes2.addEventListener("mouseover",()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Es un juego con un objetivo cultural para aprender de la cultura mapuche</p>"
    nodo.innerHTML += "<p> Se deben pintar habas por un lado y lanzarlas. Una vez, dependiendo de como caigan se obtiene puntaje</p>"
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
    nodo.innerHTML = "<p>Tiene como objetivo un desarrollo cognitivo y la motricidad fina</p>";
    nodo.innerHTML += "<p>Hay que intentar adivinar el dibujo que tiene es dibujado por un compañero lo mas rápido posible</p>"
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
    nodo.innerHTML = "Juego que tiene como objetivo conocer a nuestros compañeros. Se juega 'citandose' entre ellos y se propone un tema";
})
viernes.addEventListener("mouseout", ()=>{
    viernes.style = "background-color:darkred;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "";
})
// end