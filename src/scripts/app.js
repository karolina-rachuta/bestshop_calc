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
        selected: false,
        total: function () {
            return this.price * this.quanity
        }
    },
    {
        name: 'orders',
        price: 0.25,
        quanity: 0,
        selected: false,
        total: function () {
            return this.price * this.quanity
        }
    },
    {
        name: 'Basic',
        total: 20,
        selected: false
    },
    {
        name: 'Professional',
        total: 40,
        selected: false
    },
    {
        name: 'Premium',
        total: 60,
        selected: false
    },
    {
        name: 'Accounting',
        total: 35,
        selected: false
    },
    {
        name: 'Terminal',
        total: 5,
        selected: false
    },
]
const calculateTotal = () => {
    if (packageOptions.filter((option) => option.selected)) {
        const total = packageOptions.filter((option) => option.selected).reduce((acc, curr) => acc + (curr.total instanceof Function ? curr.total() : curr.total), 0)
        document.querySelector('.total_line').style.visibility = 'visible';
        document.querySelector('.total_line').textContent = total
    } else {
        document.querySelector('.total_line').style.visibility = 'hidden';
    }
}

inputProductsQuantityRef.addEventListener("change", () => {
    const inputText = inputProductsQuantityRef.value;
    let result;
    packageOptions.filter((option) => {
        if (option.name === 'products') {
            option.quanity = inputText
            result = option.total()
            option.selected = true
        }
    })
    numberProductLineRef.textContent = inputText;
    productLineResultRef.textContent = result;
    productLineRef.style.visibility = "visible"

    if (!inputProductsQuantityRef.value) {
        productLineRef.style.visibility = "hidden"
        packageOptions.filter((option) => {
            if (option.name === 'products') {
                option.selected = false
            }
        })
    }
    calculateTotal()
})

inputOrdersQuantityRef.addEventListener("change", () => {
    ordersLineRef.style.visibility = "visible";
    const inputText = inputOrdersQuantityRef.value;
    let result;
    packageOptions.filter((option) => {
        if (option.name === 'orders') {
            option.quanity = inputText
            result = option.total()
            option.selected = true
        }
    })
    numberOrderLineRef.textContent = inputText;
    orderLineResultRef.textContent = result;

    if (!inputOrdersQuantityRef.value) {
        ordersLineRef.style.visibility = "hidden";
        packageOptions.filter((option) => {
            if (option.name === 'orders') {
                option.selected = false
            }
        })
    }
    calculateTotal();
})

function toogleDisplay(selector) {
    document.querySelector('.selector').style.visibility === "hidden" ? document.querySelector('.selector').style.visibility === "visible" : document.querySelector('.selector').style.visibility === "hidden"
}

inputPackageRef.addEventListener("click", () => {
    if (selectOptionsRef.style.display === "none") {
        selectOptionsRef.style.display = "block"
    } else selectOptionsRef.style.display = "none"
})

document.querySelector('.select_option-basic').addEventListener('click', () => {
    const spans = document.querySelectorAll('.calculator_package-line span');
    if (document.querySelector('.calculator_package-line').style.visibility === 'visible') {
        document.querySelector('.calculator_package-line').style.visibility = 'hidden';
        packageOptions.filter((option) => {
            if (option.name === 'Basic') {
                option.selected = false
            }
        })
    } else {
        packageOptions.filter((option) => {
            document.querySelector('.calculator_package-line').style.visibility = 'visible';
            if (option.name === 'Basic') {
                spans[1].textContent = option.name;
                spans[2].textContent = `$${option.total}`;
                option.selected = true
            }
        })

    }
    calculateTotal()
})

document.querySelector('.select_option-professional').addEventListener('click', () => {
    const spans = document.querySelectorAll('.calculator_package-line span');

    if (document.querySelector('.calculator_package-line').style.visibility === 'visible') {
        document.querySelector('.calculator_package-line').style.visibility = 'hidden'
        packageOptions.filter((option) => {
            if (option.name === 'Professional') {
                option.selected = false;
            }
        })
    } else {
        document.querySelector('.calculator_package-line').style.visibility = 'visible';
        packageOptions.filter((option) => {
            if (option.name === 'Professional') {
                spans[1].textContent = option.name;
                spans[2].textContent = `$${option.total}`;
                option.selected = true
            }
        })
    }
    calculateTotal()
});

document.querySelector('.select_option-premium').addEventListener('click', () => {
    const spans = document.querySelectorAll('.calculator_package-line span');

    if (document.querySelector('.calculator_package-line').style.visibility === 'visible') {
        document.querySelector('.calculator_package-line').style.visibility = 'hidden';
        packageOptions.filter((option) => {
            if (option.name === 'Premium') {
                option.selected = false;
            }
        })
    } else {
        document.querySelector('.calculator_package-line').style.visibility = 'visible'
        packageOptions.filter((option) => {
            if (option.name === 'Premium') {
                spans[1].textContent = option.name;
                spans[2].textContent = `$${option.total}`;
                option.selected = true;
            }
        })
    }
    calculateTotal()
});



document.querySelectorAll('.checkbox')[0].addEventListener('click', () => {
    if (document.querySelectorAll('.checkbox')[0].checked) {
        document.querySelector('.calculator_accounting-line').style.visibility = 'visible'
        packageOptions.filter((option) => {
            if (option.name === 'Accounting') {
                option.selected = true;
            }
        })
    } else {
        document.querySelector('.calculator_accounting-line').style.visibility = 'hidden';
        packageOptions.filter((option) => {
            if (option.name === 'Accounting') {
                option.selected = false
            }
        })
    }

    calculateTotal()
})

document.querySelectorAll('.checkbox')[1].addEventListener('click', () => {
    if (document.querySelectorAll('.checkbox')[1].checked === true) {
        document.querySelector('.calculator_terminal-line').style.visibility = 'visible'
        packageOptions.filter((option) => {
            if (option.name === 'Terminal') {
                option.selected = true;
            }
        })
    } else {
        document.querySelector('.calculator_terminal-line').style.visibility = 'hidden';
        packageOptions.filter((option) => {
            if (option.name === 'Terminal') {
                option.selected = false;
            }
        })
    }
    calculateTotal()
})