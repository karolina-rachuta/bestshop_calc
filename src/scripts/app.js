const inputProductsQuantityRef = document.querySelector('.input_products');
const inputOrdersQuantityRef = document.querySelector('.input_orders');
const inputPackageRef = document.querySelector('.input_package');
const selectOptionsRef = document.querySelector('.select_options');


inputPackageRef.addEventListener("click", () => {
    selectOptionsRef.style.display = "none" ? selectOptionsRef.style.display = "block" : selectOptionsRef.style.display = "none";
})
