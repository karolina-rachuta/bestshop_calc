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

const packageOptions = [{
        name: 'products',
        price: 0.5,
        quanity: 0,
        total: function () {
            return this.price * this.quanity
        }
    },
    {
        name: 'orders',
        price: 0.25,
        quanity: inputOrdersQuantityRef.value,
        total: function () {
            return this.price * this.quanity
        }
    },
    {
        name: 'Basic',
        price: '$20',
        selected: false
    },
    {
        name: 'Professional',
        price: '$40',
        selected: false
    },
    {
        name: 'Premium',
        price: '$60',
        selected: false
    },
    {
        name: 'Accounting',
        price: '$35',
        selected: false
    },
    {
        name: 'Terminal',
        price: '$5',
        selected: false
    },
]

inputProductsQuantityRef.addEventListener("change", () => {
        const inputText = inputProductsQuantityRef.value;
        console.log(inputText)
        packageOptions[0].quanity = inputText;
        numberProductLineRef.textContent = inputText;
        const result = packageOptions[0].total();
        productLineResultRef.textContent = result;
        productLineRef.style.visibility = "visible"

        if (!inputProductsQuantityRef.value) {
            productLineRef.style.visibility = "hidden"
        }
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
    spans[1].textContent = packageOptions[0].name;
    spans[2].textContent = packageOptions[0].price;
    document.querySelector('.calculator_package-line').style.visibility === 'hidden' ? (
        document.querySelector('.calculator_package-line').style.visibility = 'visible'
    ) : (
        document.querySelector('.calculator_package-line').style.visibility = 'hidden'
    )
})

document.querySelector('.select_option-professional').addEventListener('click', () => {
    const spans = document.querySelectorAll('.calculator_package-line span');
    spans[1].textContent = packageOptions[1].name;
    spans[2].textContent = packageOptions[1].price;
    document.querySelector('.calculator_package-line').style.visibility === 'hidden' ? (
        document.querySelector('.calculator_package-line').style.visibility = 'visible'
    ) : (
        document.querySelector('.calculator_package-line').style.visibility = 'hidden'
    )
});

document.querySelector('.select_option-premium').addEventListener('click', () => {
    const spans = document.querySelectorAll('.calculator_package-line span');
    spans[1].textContent = packageOptions[2].name;
    spans[2].textContent = packageOptions[2].price;
    document.querySelector('.calculator_package-line').style.visibility === 'hidden' ? (
        document.querySelector('.calculator_package-line').style.visibility = 'visible'
    ) : (
        document.querySelector('.calculator_package-line').style.visibility = 'hidden'
    )
});

function toogleDisplay(selector) {
    document.querySelector('.selector').style.display === "none" ? document.querySelector('.selector').style.display === "block" : document.querySelector('.selector').style.display === "none"
}

document.querySelectorAll('.checkbox')[0].addEventListener('click', () => {
    document.querySelectorAll('.checkbox')[0].checked === true ? document.querySelector('.calculator_accounting-line').style.visibility = 'visible' : document.querySelector('.calculator_accounting-line').style.visibility = 'hidden';
})

document.querySelectorAll('.checkbox')[1].addEventListener('click', () => {
    if (document.querySelectorAll('.checkbox')[1].checked === true) {
        document.querySelector('.calculator_terminal-line').style.visibility = 'visible'
        document.querySelector('.total_line').style.visibility = 'visible'
    } else {
        document.querySelector('.calculator_terminal-line').style.visibility = 'hidden';
    }
})


document.querySelector('.total_line').style.visibility = 'hidden'