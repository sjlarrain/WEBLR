const lunes = document.getElementsByClassName("Lunes")[0];
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

// Miercoles

miercoles1.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo trabajar la frustración y también la memoria.</p>";
    nodo.innerHTML += "<pLa persona que dirige el juego da instrucciones para que los estudiantes vayan a buscar ciertos objetos en sus casas.</p>"
})

miercoles2.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>El juego tiene como objetivo socializar con los compañeros. Es un juego estratégico y para desarrollar la habilidad motriz manual.</p>";
    nodo.innerHTML += "<p>Cada jugador va recorriendo el mapa mientras va dejando una estela. No se pueden traspasar la estela propia ni la de otros compañeros.</p>"
})

miercoles3.addEventListener("mouseover",()=>{
    miercoles.style = "background-color:black;";
    const nodo = miercoles.getElementsByClassName("informacion")[0];
    nodo.innerHTML = "<p>Tiene como objetivo socializar con los compañeros con los que se está jugando, adquirir nuevo vocabulario y crear estrategias para adivinar cada palabra y hacer deducciones.</p>";
    nodo.innerHTML += "<p>Se piensa una palabra y despues se agragan en un papel guines por letras. Ahora, hay que intentar acertar cada letra. Si no lo acerta, se dibuja una parte de un humano en la horca. Si termina siendo dibujado en un 100% pierden.</p>"
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
    nodo.innerHTML = "<p>Es igual a Bachillerato pero es online</p>"
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
