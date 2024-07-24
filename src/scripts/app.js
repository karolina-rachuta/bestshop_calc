const inputProductsQuantityRef = document.querySelector('.input_products');
const inputOrdersQuantityRef = document.querySelector('.input_orders');
const inputPackageRef = document.querySelector('.input_package');
const selectOptionsRef = document.querySelector('.select_options');

const productLineRef = document.querySelector('.calculator_products-line');
const numberProductLineRef = document.querySelector('.product-line_number');
const productLineResultRef = document.querySelector('.product-line_result');
const ordersLineRef = document.querySelector('.calculator_orders-line');
const numberOrderLineRef = document.querySelector('.order-line_number');
const orderLineResultRef = document.querySelector('.order-line_result');

const packageOption = [{
        name: 'basic',
        price: '$20'
    },
    {
        name: 'proffesional',
        price: '$40'
    },
    {
        name: 'premium',
        price: '$60'
    }
]

inputProductsQuantityRef.addEventListener("change", () => {
    productLineRef.style.visibility = "hidden" ? productLineRef.style.display = "visible" : productLineRef.style.display = "hidden";
    const inputText = inputProductsQuantityRef.value;
    numberProductLineRef.textContent = inputText;
    const result = inputText * 0.5;
    productLineResultRef.textContent = result;
})

inputOrdersQuantityRef.addEventListener("change", () => {
    ordersLineRef.style.visibility = "hidden" ? ordersLineRef.style.display = "visible" : ordersLineRef.style.display = "hidden";
    const inputText = inputOrdersQuantityRef.value;
    numberOrderLineRef.textContent = inputText;
    const result = inputText * 0.25
    orderLineResultRef.textContent = result;
})


// function getInputValue(inputSelector, outputSelector) {
//     document.querySelector(inputSelector).addEventListener('change', () => {
//         const inputUserText = document.querySelector(inputSelector).value;
//         document.querySelector(outputSelector).textContent = inputUserText;
//     })
//     console.log('done');
// }

// getInputValue('.input_orders', '.order-line_number');


inputPackageRef.addEventListener("click", () => {
    if (selectOptionsRef.style.display === "none") {
        selectOptionsRef.style.display = "block"
    } else selectOptionsRef.style.display = "none"
})

document.querySelector('.select_option-basic').addEventListener('click', () => {
    const spans = document.querySelectorAll('.calculator_package-line span')
    spans[1].textContent = packageOption[0].name;
    spans[2].textContent = packageOption[0].price;
    document.querySelector('.calculator_package-line').style.visibility === 'hidden' ? (
        document.querySelector('.calculator_package-line').style.visibility = 'visible'
    ) : (
        document.querySelector('.calculator_package-line').style.visibility = 'hidden'
    )
})

document.querySelector('.select_option-professional').addEventListener('click', () => {
    const spans = document.querySelectorAll('.calculator_package-line span');
    spans[1].textContent = packageOption[1].name;
    spans[2].textContent = `${packageOption[1].price}`;
    document.querySelector('.calculator_package-line').style.visibility === 'hidden' ? (
        document.querySelector('.calculator_package-line').style.visibility = 'visible'
    ) : (
        document.querySelector('.calculator_package-line').style.visibility = 'hidden'
    )
});

document.querySelector('.select_option-premium').addEventListener('click', () => {
    const spans = document.querySelectorAll('.calculator_package-line span');
    spans[1].textContent = packageOption[2].name;
    spans[2].textContent = `${packageOption[2].price}`;
    document.querySelector('.calculator_package-line').style.visibility === 'hidden' ? (
        document.querySelector('.calculator_package-line').style.visibility = 'visible'
    ) : (
        document.querySelector('.calculator_package-line').style.visibility = 'hidden'
    )
});

function toogleDisplay(selector) {
    document.querySelector('.selector').style.display === "none" ? document.querySelector('.selector').style.display === "block" : document.querySelector('.selector').style.display === "none"
}