
let carrito = []


const botonComprar = document.querySelector(".card-group");

botonComprar.forEach((card)=>{
card.addEventListener("click", (e)=>{
    leerDatosProducto(e.target.parentElement)
})
 })

function leerDatosProducto(productos) {
    //este es un objeto
    const infoProducto ={
        titulo: card-body.querySelector(".card-title").textContent,
        texto: card-body.querySelector(".card-text").textContent,
    }
}

//agregar elementos al carrito
carrito=[...carrito, infoProducto ]

//mostrar prodcutos en el carrito
const mostrarCarrito = document.querySelector("#carrito")

function carritoHtml(){
    limpiarHTML();

    articulosCarrito.forEach((producto) => {
      const row = document.createElement("p");
      row.innerHTML = `
      <div class="container">
      <h5>${producto.nombre}</h5>
      <p>${producto.texto}</p>
      <button class="btn btn-danger">Eliminar</button>
      </div>
      `;
      carrito.appendChild(row);
    });
  }
  
  function limpiarHTML() {
    carrito.innerHTML = "";
  }

//botonComprar.addEventListener("click", function() {
//carrito.push(botonComprar)
//console.log([carrito])
//})

