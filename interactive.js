let cartIsEmpty = true;
let productQuantity = 0;
let totalPrice = 0
let currentPhoto = 0;

function sideBar() {
    const sidebar = document.getElementById("side-bar")
    const header = document.querySelector("header")
    const middle = document.querySelector("#middle")
    sidebar.style.display = "block"
    header.style.filter = "brightness(0.4)"
    middle.style.filter = "brightness(0.4)"

}


function closeSideBar() {
    const sidebar = document.getElementById("side-bar")
    const header = document.querySelector("header")
    const middle = document.querySelector("#middle")
    sidebar.style.display = "none"
    header.style.filter = "brightness(1)"
    middle.style.filter = "brightness(1)"
}

function plus() {
    const numberOfProducts = document.getElementById("numberOfProducts");
    numberOfProducts.textContent = 1 + +numberOfProducts.textContent
    productQuantity += 1
    document.getElementById("productQuantity").textContent = productQuantity
    totalPrice = 125 * productQuantity
    document.getElementById("payment").textContent = "$" + totalPrice + ".00"
}

function minus() {
    const numberOfProducts = document.getElementById("numberOfProducts");
    if (+numberOfProducts.textContent > 0) {
    numberOfProducts.textContent =  +numberOfProducts.textContent - 1
    productQuantity -= 1
    }
    totalPrice = 125 * productQuantity
    document.getElementById("productQuantity").textContent = productQuantity
    document.getElementById("payment").textContent = "$" + totalPrice + ".00"
}


function showCart(){
    const cartDisplay = document.getElementById("cart-icon")
    if (cartDisplay.style.display == "block") {cartDisplay.style.display = "none"}
    else {cartDisplay.style.display = "block"}
}

function addToCart() {
    const productBought = document.getElementById("cartisntempty")
    const emptyCart = document.getElementById("empty-cart")
    cartIsEmpty = false;
    productBought.style.display = "block"
    emptyCart.style.display = "none"
}

function deleter() {
    const productBought = document.getElementById("cartisntempty")
    const emptyCart = document.getElementById("empty-cart")
    cartIsEmpty = true;
    productBought.style.display = "none"
    emptyCart.style.display = "flex"
    productQuantity = 0;
}

function photo1 () {
    const p1 = document.getElementById("product1")
    const p2 = document.getElementById("product2")
    const p3 = document.getElementById("product3")
    const p4 = document.getElementById("product4")
    const photo1 = document.getElementById("p1")
    const photo2 = document.getElementById("p2")
    const photo3 = document.getElementById("p3")
    const photo4 = document.getElementById("p4")
    photo1.style.border = "3px solid hsl(26, 100%, 55%)"
    photo1.style.opacity = 0.7;
    photo2.style.border = "none"
    photo2.style.opacity = 1;
    photo3.style.border = "none"
    photo3.style.opacity = 1;
    photo4.style.border = "none"
    photo4.style.opacity = 1;
    p1.style.display = "block";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";

}

function photo2 () {
    const p1 = document.getElementById("product1")
    const p2 = document.getElementById("product2")
    const p3 = document.getElementById("product3")
    const p4 = document.getElementById("product4")
    const photo1 = document.getElementById("p1")
    const photo2 = document.getElementById("p2")
    const photo3 = document.getElementById("p3")
    const photo4 = document.getElementById("p4")
    photo1.style.border = "none"
    photo1.style.opacity = 1;
    photo2.style.border = "3px solid hsl(26, 100%, 55%)"
    photo2.style.opacity = 0.7;
    photo3.style.border = "none"
    photo3.style.opacity = 1;
    photo4.style.border = "none"
    photo4.style.opacity = 1;
    p1.style.display = "none";
    p2.style.display = "block";
    p3.style.display = "none";
    p4.style.display = "none";

}
function photo3 () {
    const p1 = document.getElementById("product1")
    const p2 = document.getElementById("product2")
    const p3 = document.getElementById("product3")
    const p4 = document.getElementById("product4")
    const photo1 = document.getElementById("p1")
    const photo2 = document.getElementById("p2")
    const photo3 = document.getElementById("p3")
    const photo4 = document.getElementById("p4")
    photo1.style.border = "none"
    photo1.style.opacity = 1;
    photo2.style.border = "none"
    photo2.style.opacity = 1;
    photo3.style.border = "3px solid hsl(26, 100%, 55%)"
    photo3.style.opacity = 0.7;
    photo4.style.border = "none"
    photo4.style.opacity = 1;
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "block";
    p4.style.display = "none";

}
function photo4 () {
    const p1 = document.getElementById("product1")
    const p2 = document.getElementById("product2")
    const p3 = document.getElementById("product3")
    const p4 = document.getElementById("product4")
    const photo1 = document.getElementById("p1")
    const photo2 = document.getElementById("p2")
    const photo3 = document.getElementById("p3")
    const photo4 = document.getElementById("p4")
    photo1.style.border = "none"
    photo1.style.opacity = 1;
    photo2.style.border = "none"
    photo2.style.opacity = 1;
    photo3.style.border = "none"
    photo3.style.opacity = 1;
    photo4.style.border = "3px solid hsl(26, 100%, 55%)"
    photo4.style.opacity =  0.7;
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "block";

}

function previous () {
    if (currentPhoto > 1) {
        currentPhoto -= 1
        if (currentPhoto == 1) {photo1()}
        if (currentPhoto == 2) {photo2()}
        if (currentPhoto == 3) {photo3()}
        if (currentPhoto == 4) {photo4()}

    }    
}

function next () {
    if (currentPhoto < 4) {
        currentPhoto += 1
        if (currentPhoto == 1) {photo1()}
        if (currentPhoto == 2) {photo2()}
        if (currentPhoto == 3) {photo3()}
        if (currentPhoto == 4) {photo4()}

    }    
}