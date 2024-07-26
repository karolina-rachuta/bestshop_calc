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
    const selectedOptions = packageOptions.filter((option) => option.selected)
    if (selectedOptions.length === 0) {
        document.querySelector('.total_line').style.visibility = 'hidden';
    } else {
        if ((packageOptions.filter((option) => option.selected))) {
            const total = packageOptions.filter((option) => option.selected).reduce((acc, curr) => acc + (curr.total instanceof Function ? curr.total() : curr.total), 0)
            document.querySelector('.total_line').style.visibility = 'visible';
            document.querySelector('.total_line').textContent = `$${total}`
        }
    }
}


const createInputResults = (leftSelector, name, rightSelector) => {
    let inputText;
    let result;
    leftSelector.addEventListener("change", () => {
        inputText = leftSelector.value;
        packageOptions.filter((option) => {
            if (option.name === name) {
                option.quanity = inputText
                result = `$${option.total()}`
                option.selected = true
                return (
                    inputText,
                    result
                )
            }
            return null
        })

        rightSelector.style.visibility = "visible";
        rightSelector.querySelector('span:nth-of-type(2)').textContent = inputText;
        rightSelector.querySelector('span:nth-of-type(3)').textContent = result;

        if (!leftSelector.value) {
            rightSelector.style.visibility = "hidden";
            packageOptions.filter((option) => {
                if (option.name === 'name') {
                    option.selected = false
                }
            })
        }
        calculateTotal();
    })
}

createInputResults(inputProductsQuantityRef, 'products', productLineRef);
createInputResults(inputOrdersQuantityRef, 'orders', ordersLineRef);

function toogleDisplay(selector) {
    document.querySelector('.selector').style.visibility === "hidden" ? document.querySelector('.selector').style.visibility === "visible" : document.querySelector('.selector').style.visibility === "hidden"
}

inputPackageRef.addEventListener("click", () => {
    if (selectOptionsRef.style.display === "none") {
        selectOptionsRef.style.display = "block"
    } else selectOptionsRef.style.display = "none"
})

const resetBasicProfessionalPremium = () => {
    packageOptions.forEach(option => {
        if (option.name === 'Basic' || option.name === 'Professional' || option.name === 'Premium') {
            option.selected = false;
        }
    });
}

const createPackagesResultFromList = (optionLeftSelector, name) => {
    document.querySelector(optionLeftSelector).addEventListener('click', () => {
        const spans = document.querySelectorAll('.calculator_package-line span');
        resetBasicProfessionalPremium();
        if (document.querySelector('.calculator_package-line').style.visibility === 'visible') {
            document.querySelector('.calculator_package-line').style.visibility = 'hidden'
            packageOptions.filter((option) => {
                if (option.name === name) {
                    option.selected = false;
                }
            })
        } else {
            document.querySelector('.calculator_package-line').style.visibility = 'visible';
            packageOptions.filter((option) => {
                if (option.name === name) {
                    spans[1].textContent = option.name;
                    spans[2].textContent = `$${option.total}`;
                    option.selected = true
                }
            })
        }
        calculateTotal()
    })

}

createPackagesResultFromList('.select_option-basic', 'Basic');
createPackagesResultFromList('.select_option-professional', 'Professional');
createPackagesResultFromList('.select_option-premium', 'Premium');



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
    if (document.querySelectorAll('.checkbox')[1].checked) {
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