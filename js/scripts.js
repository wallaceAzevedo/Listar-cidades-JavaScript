// array de stados para sabe se eles existem usando o metodo includes e sem precisar usar while e for
// link da aula https://www.youtube.com/watch?v=mkQaDD9rc28
let estados= [ "Minas","Goias", "São Paulo"];

console.log(estados.includes("São Paulo"));

if(estados.includes("São Paulo")){
    console.log("sim, são paulo existe");
    //receber como número lembrando que a primeira palavra sempre começa como número 0
    console.log(estados.indexOf("Goias"));
} else {
    console.log("nâo, são paulo nâo existe");
}

console.log(estados.includes("join ville"));
if(estados.includes("join ville")){
    console.log("sim, join ville existe");
} else {
    console.log("nâo, join ville nâo existe ");
}