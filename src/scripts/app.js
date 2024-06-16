const inputProductsQuantityRef = document.querySelector('.input_products');
const inputOrdersQuantityRef = document.querySelector('.input_orders');
const inputPackageRef = document.querySelector('.input_package');
const selectOptionsRef = document.querySelector('.select_options');

const productLineRef = document.querySelector('.calculator_products-line');
const numberProductLineRef = document.querySelector('.product-line_number');
const ordersLineRef = document.querySelector('.calculator_orders-line');
const numberOrderLineRef = document.querySelector('.order-line_number');

inputProductsQuantityRef.addEventListener("change", () => {
    productLineRef.style.visibility = "hidden" ? productLineRef.style.display = "visible" : productLineRef.style.display = "hidden";
    const inputText = inputProductsQuantityRef.value;
    numberProductLineRef.textContent = inputText;
})

inputOrdersQuantityRef.addEventListener("change", () => {
    ordersLineRef.style.visibility = "hidden" ? ordersLineRef.style.display = "visible" : ordersLineRef.style.display = "hidden";
})

inputPackageRef.addEventListener("click", () => {
    if (selectOptionsRef.style.display === "none") {
        selectOptionsRef.style.display = "block"
    } else selectOptionsRef.style.display = "none"
})



function toogleDisplay(selector) {
    document.querySelector('.selector').style.display === "none" ? document.querySelector('.selector').style.display === "block" : document.querySelector('.selector').style.display === "none"
}