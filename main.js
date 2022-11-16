//Variables para el Menu inactivo
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
//Variables menu-Mobile
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//
const menuCarroIcon = document.querySelector(".navbar-shopping-cart");
const menuCarroOrders = document.querySelector(".product-detail");

/*Agregamos el addEvenListener para escuchar el evento del menu 
inactivo*/

menuEmail.addEventListener("click", toggleDesktopMenu);

/*Agregamos el evento para escuchar el evento del menuHamburguesa*/
menuHamIcon.addEventListener("click", toggleMobileMenu);

/**/
menuCarroIcon.addEventListener("click", toggleCarritoMenu);

//Creamos la funcion
function toggleDesktopMenu() {
  const isMenuCarroOrdersClosed =
    menuCarroOrders.classList.contains("inactive");
  if (!isMenuCarroOrdersClosed) {
    menuCarroOrders.classList.add("inactive");
  }
  /*podemos confirmar si esta escuchando con el console.log
     console.log("click")
    Con esto agregamos o quitamos la clase*/
  desktopMenu.classList.toggle("inactive");
  //Nota: la clase inactive fue creada en styles.css
}

//Creamos la funcion del menu hamburguesa
function toggleMobileMenu() {
  const isMenuCarroOrdersClosed = menuCarroOrders.classList.contains("inactive");
  if (!isMenuCarroOrdersClosed) {
    menuCarroOrders.classList.add("inactive");
  }
  /* Con esto agregamos o quitamos la clase*/
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  //si el desktopMenu esta abierto
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  // Si el mobileMenu esta open hay que cerrarlo
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  menuCarroOrders.classList.toggle("inactive");
}
