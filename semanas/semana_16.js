const lunes = document.getElementsByClassName("Lunes")[0];
const lunes1 = lunes.getElementsByClassName("one")[0];
const lunes2 = lunes.getElementsByClassName("two")[0];
const lunes3 = lunes.getElementsByClassName("three")[0];
const lunes4 = lunes.getElementsByClassName("fourth")[0];
const miercoles = document.getElementsByClassName("Miercoles")[0]
const miercoles1 = miercoles.getElementsByClassName("one")[0];
const miercoles2 = miercoles.getElementsByClassName("two")[0];
const miercoles3 = miercoles.getElementsByClassName("three")[0];
const miercoles4 = lunes.getElementsByClassName("fourth")[0];
const viernes = document.getElementsByClassName("Viernes")[0];
const viernes1 = viernes.getElementsByClassName("one")[0];
// const viernes2 = viernes.getElementsByClassName("two")[0];
// const viernes3 = viernes.getElementsByClassName("three")[0];

// lunes
lunes1.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Objetivos: Desarrollar y poner en práctica la motricidad fina, desarrollar la imaginación y creatividad, socializar con los demás jugadores.</p>";
    nodo.innerHTML += "Juego tecnológico, donde es necesario conectarse a la siguiente plataforma online: <a href='https://www.brokenpicturephone.com/'> link </a> </p>";

})
lunes2.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo aplicar y practicar la creatividad, desarrollo de la memoria de manera didáctica, socializar con el grupo. </p>";
    nodo.innerHTML += "<p>Se cuenta hasta el numero 15, al llegar al numero, este se sustituye por una palabra. Cada vez se va reemplazando los numeros por palabras hasta tener que decir las 15 palabras</p>";
})
lunes3.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p> Este juego pone en práctica el desarrollo de la creatividad, entrenar la habilidad de ocultar expresiones faciales y tonos en la voz, poner a prueba la agudeza del observador (reconocer gestos delatores en el contrincante). </p>";
    nodo.innerHTML += "<p>La idea es que cada participante describa el objeto que contiene la imagen al contrincante, mintiendo en la descripción o diciendo la verdad. A través de preguntas puede poner a prueba al que esta describiendo para saber si esta diciendo la verdad o mintiendo.</p>";
})
lunes4.addEventListener("mouseover", ()=>{
    lunes.style = "background-color:black;";
    const nodo = lunes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo potenciar la percepción visual, mejorar la concentración y potenciar la capacidad de observación.</p>";
    nodo.innerHTML += "<p>Se colocan dos imagenes y se busca las diferencias entre las dos imagenes.</p>";
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

// Miercoles

miercoles1.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo socializar, divertirse, potenciar la capacidad de tomar decisiones, potenciar la agilidad mental, permite que los jugadores se conozcan mejor entre ellos.</p>";
    nodo.innerHTML += "<pJuego de agilidad mental, puesto que nos desafía a ponernos en dos situaciones hipotéticas y decidir rápidamente cuál es la que nos parece mejor, al mismo tiempo que pensamos qué es lo más probable que prefiera el resto, para no pagar la penitencia al final del juego.</p>"
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>En el juego  se busca desarrollar estrategias para eliminar al resto de los jugadores, potenciar habilidades sensoriales y de reacción, aprender a manejar la tolerancia a la frustración.</p>";
    nodo.innerHTML += "<p>Los jugadores juegan en una pagina web el siguiente juego <a href=' https://www.paisdelosjuegos.cl/juego/smash-karts.html'> link </a> </p>"
})

miercoles3.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Objetivos: Reconocer canciones de la introducción de distintas series, fortalecer la memoria y la concentración, pasar un buen rato recordando las distintas series.</p>";
    nodo.innerHTML += "<p>Se reproduce una cancion y los jugadores deben ser capaz de identificarla y nombrearla antes que sus compañeros.</p>"
})

miercoles4.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>En este juego se puede desarrollar el pensamiento espacial y el reconocimiento de patrones, </p>";
    nodo.innerHTML += "<p>En un tablero con columnas se van colocando fichas de dos colores. Uno debe lograr unir cuatro fichas en orden vertical, horizontal o diagonal.</p>"
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
viernes1.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>En el juego se intentaba identificar los del tremendo curso que tuvimos el 2020.</p>"
})

viernes2.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo el trabajo en equipo, creatividad, compartir, socializar y desarrollar comunicación no verbal.</p>";
    nodo.innerHTML += "<p>Hay que lograr comunicar una palabra a través de descripciones y actuaciones.</p>"
})

viernes3.addEventListener("mouseover",()=>{
    viernes.style = "background-color:black;";
    const nodo = viernes.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo fortalecer la memoria, concentración, trabajar la tolerancia a la frustración.</p>";
    nodo.innerHTML += "<p>Consiste en acertar a una canción una vez de escucharla.</p>"
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
