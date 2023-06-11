var panier = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let fermeture = document.querySelector('#porte');

panier.onclick = () => {
    cart.classList.add("active");
};

fermeture.onclick = () => {
    cart.classList.remove("active");
}

