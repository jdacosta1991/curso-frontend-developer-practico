//Variables para el Menu inactivo
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
//Variables menu-Mobile
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//
const menuCarroIcon = document.querySelector(".navbar-shopping-cart");
const menuCarroOrders = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container");


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
  const isMenuCarroOrdersClosed =
    menuCarroOrders.classList.contains("inactive");
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

/* Traer shoplist consulta */

const productList = [];
productList.push({
  name: "bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 220,
  image: "/home/jorge/Descargas/pexels-cristian-benavides-2049411.jpg",
});
productList.push({
  name: "Laptop",
  price: 330,
  image: "/home/jorge/Descargas/pexels-life-of-pix-7974.jpg",
});

//funcion para iterar y maquetar
function renderProducts(arr){
  //Iteramos por cada producto que tengamos
for (product of arr) {
  //Por Cada uno maquetamos o creamos en HTML
  const productCard = document.createElement("div")
  productCard.classList.add("product-card");

  const imgCard = document.createElement("img")
  imgCard.setAttribute("src", product.image)

  const productInfo = document.createElement("div")
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div")

  const productPrice = document.createElement("p")
  productPrice.innerText = "$" + product.price
  const productName = document.createElement("p")
  productName.innerText = product.name

  productInfoDiv.appendChild(productPrice)
  productInfoDiv.appendChild(productName)
  
  const productInfoFigure = document.createElement("figure")
  const productImgCart = document.createElement("img")
  productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")

  //los agregamos dinamicamente con javascript
  productInfoFigure.appendChild(productImgCart);
  
  productInfo.appendChild(productInfoDiv)
  productInfo.appendChild(productInfoFigure)

  productCard.appendChild(imgCard)
  productCard.appendChild(productInfo)

  cardContainer.appendChild(productCard)
}
}


renderProducts(productList);
