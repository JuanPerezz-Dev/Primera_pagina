const adivinar = document.getElementById("adivinar");
const salida = document.getElementById("salida");

adivinar.addEventListener("input", function(){

    if (adivinar.value < 0 || adivinar.value > 100){
        salida.textContent="Ingresa un numero entre el 0 y 100"
    } else if(adivinar.value == 9){
        salida.textContent="Adivinaste"
    } else if (adivinar.value < 9){
        salida.textContent="Mi numero es mayor"
    } else{
        salida.textContent="Mi numero es menor"
    }
})

const pasiones = document.getElementById("pasiones");
const imagen = document.getElementById("imagen");
const gustos = document.getElementById("gustos");


pasiones.addEventListener("change", function(){
    let opcion = pasiones.value
    if(opcion==="dibujar"){
        gustos.textContent="Me gusta dibujar en blanco y negro(Pintar no es lo mio)"
        imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOYhbz5QZzLqOOxWwnYvR2D2Cn_U4N_O-iWnvxJ4q7Q&s=10"
        imagen.style.width="760px"
    } else if (opcion==="jugar"){
        gustos.textContent="En el momento me gusta jugar mucho Marvel Rivals"
        imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SKmD2xHObcTMjGs0Hsd16-HCRM5dKDvG32fdpjWhzg&s=10"
        imagen.style.width="760px"
    } else if (opcion==="musica"){
        gustos.textContent="No tengo musica o genero de musica preferido, solo dejo spotify en aleatorio"
        imagen.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhTWer8bo-6sa0qhbw6vZHQUdKWxhokZTUjLPSjrFoiQ&s=10"
        imagen.style.width="760px"
    } else{
        gustos.textContent="Cosas que me gustan:"
        imagen.src="https://i.pinimg.com/736x/df/03/f6/df03f6f75e854017b1ac79ffcdad269e.jpg"
        imagen.style.width="760px"
    }
})

const click = document.getElementById("darClick")

click.addEventListener("click", function(){
    alert("Profe eso ta' duro")
})

