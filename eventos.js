
let carrito = []


const botonComprar = document.querySelector(".card-group");

botonComprar.addEventListener("click", function() {
carrito.push(botonComprar)
console.log([carrito])
})

