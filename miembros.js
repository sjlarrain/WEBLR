const carolina = document.getElementsByClassName("PCaro")[0];
const matias = document.getElementsByClassName("PMatias")[0];
const grez = document.getElementsByClassName("PGrez")[0];
const santiago = document.getElementsByClassName("PSantiago")[0];
const pepe = document.getElementsByClassName("PPepe")[0];


carolina.addEventListener("mouseover", ()=>{
    carolina.getElementsByTagName("img")[0].style = "filter:brightness(0.2);";
    const name = carolina.getElementsByClassName("PCaron")[0];
    const descripcion = carolina.getElementsByClassName("descripcion")[0];
    name.innerHTML = ""
    descripcion.innerHTML = "Carolina estudia ingenería comercial y actualemnte esta estudiando 5 año"
});
carolina.addEventListener("mouseout",()=>{
    carolina.getElementsByTagName("img")[0].style = "filter:brightness(1);";
    const name = carolina.getElementsByClassName("PCaron")[0];
    const descripcion = carolina.getElementsByClassName("descripcion")[0];
    name.innerHTML = "Carolina"
    descripcion.innerHTML = ""

})

matias.addEventListener("mouseover", ()=>{
    matias.getElementsByTagName("img")[0].style = "filter:brightness(0.2);";
    const name = matias.getElementsByClassName("PMatiasn")[0];
    const descripcion = matias.getElementsByClassName("descripcion")[0];
    name.innerHTML = ""
    descripcion.innerHTML = "Matias estudia ingeniería civil. Actualmente esta en 2do año."
});
matias.addEventListener("mouseout",()=>{
    matias.getElementsByTagName("img")[0].style = "filter:brightness(1);";
    const name = matias.getElementsByClassName("PMatiasn")[0];
    const descripcion = matias.getElementsByClassName("descripcion")[0];
    name.innerHTML = "Matias"
    descripcion.innerHTML = ""

})

grez.addEventListener("mouseover", ()=>{
    grez.getElementsByTagName("img")[0].style = "filter:brightness(0.2);";
    const name = grez.getElementsByClassName("PGrezn")[0];
    const descripcion = grez.getElementsByClassName("descripcion")[0];
    name.innerHTML = ""
    descripcion.innerHTML = "Jose Tomás estudia ingeniería civil. Actualmente esta cursando segundo año"
});
grez.addEventListener("mouseout",()=>{
    grez.getElementsByTagName("img")[0].style = "filter:brightness(1);";
    const name = grez.getElementsByClassName("PGrezn")[0];
    const descripcion = grez.getElementsByClassName("descripcion")[0];
    name.innerHTML = "Jose Tomás"
    descripcion.innerHTML = ""

})

santiago.addEventListener("mouseover", ()=>{
    santiago.getElementsByTagName("img")[0].style = "filter:brightness(0.2);";
    const name = santiago.getElementsByClassName("PSantiagon")[0];
    const descripcion = santiago.getElementsByClassName("descripcion")[0];
    name.innerHTML = ""
    descripcion.innerHTML = "Santiago estudia ingenería comercial y actualemnte esta estudiando 5 año. Fue quien desarrollo la página"
});
santiago.addEventListener("mouseout",()=>{
    santiago.getElementsByTagName("img")[0].style = "filter:brightness(1);";
    const name = santiago.getElementsByClassName("PSantiagon")[0];
    const descripcion = santiago.getElementsByClassName("descripcion")[0];
    name.innerHTML = "Santiago"
    descripcion.innerHTML = ""

})

pepe.addEventListener("mouseover", ()=>{
    pepe.getElementsByTagName("img")[0].style = "filter:brightness(0.2);";
    const name = pepe.getElementsByClassName("PPepen")[0];
    const descripcion = pepe.getElementsByClassName("descripcion")[0];
    name.innerHTML = ""
    descripcion.innerHTML = "Pepe estudia Ingeniería Civil y esta actualmente en tercer año. Ahora nos deja para irse a España :(."
});
pepe.addEventListener("mouseout",()=>{
    pepe.getElementsByTagName("img")[0].style = "filter:brightness(1);";
    const name = pepe.getElementsByClassName("PPepen")[0];
    const descripcion = pepe.getElementsByClassName("descripcion")[0];
    name.innerHTML = "Pepe"
    descripcion.innerHTML = ""

})