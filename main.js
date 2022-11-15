//Variables para el Menu inactivo
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

/*Agregamos el addEvenListener para escuchar el evento del menu 
inactivo*/

menuEmail.addEventListener("click", toggleDesktopMenu);

//Creamos la funcion
function toggleDesktopMenu() {
    //podemos confirmar si esta escuchando con el console.log
    // console.log("click")
    //Con esto agregamos o quitamos la clase
    desktopMenu.classList.toggle("inactive") 
    //Nota: la clase inactive fue creada en styles.css
}

