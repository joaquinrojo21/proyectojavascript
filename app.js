//Array de objetos
const cursos = [
{nombre: "Analisis Tecnico Basico" , precio: 8000, modalidad: "Presencial"},
{nombre: "Analisis Fundamental Basico" , precio: 12000, modalidad: "Presencial"},
{nombre: "Analisis Tecnico Avanzado" , precio: 15000, modalidad: "Online"},
]

let conocimientoCliente;
/* s */
alert("Bienvenido a Jr Inversiones, somos la academia bursatil numero uno en latinoamerica")
alert(`A continuacion le haremos algunas preguntas para brindarle la informacion detallada del curso que mas se ajuste
  a su necesidad`)

  conocimientoCliente = prompt("Tiene algun tipo de conocimiento en el Mercado de Capitales? si o no?")

if (conocimientoCliente == "si") {
    alert("Perfecto el curso que le podemos ofrecer es el siguiente...")
    const avanzado = cursos.filter((cursos) => cursos.nombre.includes ("Avanzado") )
    alert(avanzado) 
    
} else if (conocimientoCliente == "no") {
    alert("Exclente, siempre es un buen momento para aprender algo nuevo")
    alert("Los cursos que no requieren conocimientos previos son los siguientes")
    const basico = cursos.filter((cursos) => cursos.nombre.includes ("Basico") )
    console.log(basico)
    alert("Tenemos una oferta para que realice toda la carrera de especialista en mercado de capitales")
    //total del carrito en caso de quereer hacer la carrera completa
    const totalCarrito = cursos.reduce((acumulador, curso) => acumulador + curso.precio, 0)
    alert("En caso de querer hacer todos los cursos de la academia el monto es.. " +  totalCarrito)



} else 
 alert("Te esperamos pronto, hasta luego")
 alert("A continuacion le detalleremos la informacion de todos nuestros cursos")



cursos.forEach((curso) => {
    alert(curso.nombre);
    alert(curso.precio);
    alert(curso.modalidad);
})

//listado de los cursos con sus especificaciones
const listaNombres = cursos.map(cursos => cursos.nombre)
alert(listaNombres);

/* total del carrito en caso de quereer hacer la carrera completa
const totalCarrito = cursos.reduce((acumulador, curso) => acumulador + curso.precio, 0)
alert("En caso de querer hacer todos los cursos de la academia el monto es.. " +  totalCarrito)
*/

//curso que se da a distancia//
const distan = cursos.filter((cursos) => cursos.modalidad.includes ("Online") )
alert(distan)













/* 
let menu;
menu = (prompt (`Para mas informacion seleccione el curso que desea realizar:
 1- Analisis Tecnico Basico
 2- Analisis Fundamental 
 3- Analisis Tecnico Avanzado `))
switch (menu) {
    case "1":
        alert(cursos[0])

        break;     
    case "2":
        alert(cursos[1])
      break;
    case "3":
        alert(cursos[2])
          break;
    default:
        do {
            menu= (prompt(`Para mas informacion seleccione el curso que desea realizar:
            1- Analisis Tecnico Basico
            2- Analisis Fundamental 
            3- Analisis Tecnico Avanzado `))
        } while (menu != 1 && menu != 2 && menu !=3)
     break;
}
*/



// menu a modo de ejemplo que puedo implementar el dia de mañana
/*
let menu = " Para más informacíon, Elija un curso que desee realizar\n"
menu+= "1- Analisis Tecnico Basico\n"
menu+= "2- Analisis Fundamental\n"
menu+= "3- Analisis Tecnico Avanzado\n"

let cod= 0
do {
    cod= parseInt(prompt(menu))
} while (cod != 1 && cod != 2 && cod !=3);
*/



//(menu != 1 && menu != 2 && menu !=3 )


/*
cursos.forEach((curso) => {
    alert(curso.nombre);
    alert(curso.precio);
    alert(curso.modalidad);
})

//listado de los cursos con sus especificaciones
const listaNombres = cursos.map(cursos => cursos.nombre)
alert(listaNombres);

//total del carrito en caso de quereer hacer la carrera completa
const totalCarrito = cursos.reduce((acumulador, curso) => acumulador + curso.precio, 0)
alert(totalCarrito)


//curso que se da a distancia//
const distan = cursos.filter((cursos) => cursos.modalidad.includes ("Online") )
alert(distan)


*/

