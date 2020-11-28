const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0]
const lunes3 = lunes.getElementsByClassName("three")[0];
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
    nodo.innerHTML = '<p>El objetivo es la velocidad de reacción.</p>'
    nodo.innerHTML += "<p>Juego individual, donde cada jugador debe observar la secuencia que envía el profesor y reescribirla en su celular en el mismo orden, para enviarla al chat de whatsapp del grupo.</p>";
})
lunes2.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo activar la memoria a través de elementos visuales, aumentar la capacidad de asociación.</p>";
    nodo.innerHTML += "<p>Se sube una imágen al grupo de Whatsapp, y cada grupo debe encontrar el máximo de respuestas posibles en 6 minutos</p>";
})
lunes3.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Juego de comunicación efectiva, imaginación, escuchar de forma activa.</p>";
    nodo.innerHTML += "<p>Cada jugador realiza un dibujo y lo describe a la pareja para que esta, sin haber visto el retrato, lo replique.</p>";
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
    nodo.innerHTML = "<p>Tiene como objetivo el Trabajo en equipo, negociación, comunicación<./p>";
    nodo.innerHTML += "<p>En grupos de 4 adivinan los acertijos propuestos por el profesor.</p>"
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo trabajar la creatividad y la imaginación.</p>";
    nodo.innerHTML += "<p>Se juega el tradicional cacho con los amigos.</p>"
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
    nodo.innerHTML = "<p>Desarrollar habilidades en artes plásticas para realizar el autorretrato. Al momento de reconocer a los compañeros y compañeras. Los dibujos son autorretratos que fueron enviados previamente al profesor.</p>";
})

viernes2.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo trabajar la creatividad y la imaginación.</p>";
    nodo.innerHTML += "<p>Se presentarán acertijos tipo puzzle, en los que hay una figura construida con líneas (fósforos) y se debe lograr generar otra forma en una cantidad de movimientos de líneas fijos.</p>"
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
