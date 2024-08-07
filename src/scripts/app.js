const inputProductsQuantityRef = document.querySelector('.input_products');
const inputOrdersQuantityRef = document.querySelector('.input_orders');
const productLineRef = document.querySelector('.calculator_products-line');
const ordersLineRef = document.querySelector('.calculator_orders-line');
const inputPackageRef = document.querySelector('.input_package');
const paragraphInputPackageRef1 = document.querySelector('.input_package p');
const paragraphInputPackageRef = inputPackageRef.firstElementChild;
const selectOptionsRef = document.querySelector('.select_options');

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
        total: 0,
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

createInputResults(inputProductsQuantityRef, 'products', productLineRef);
createInputResults(inputOrdersQuantityRef, 'orders', ordersLineRef);
createPackagesResultFromList('.select_option-basic', 'Basic');
createPackagesResultFromList('.select_option-professional', 'Professional');
createPackagesResultFromList('.select_option-premium', 'Premium');
createResultsForCheckbox(0, 'Accounting', '.calculator_accounting-line')
createResultsForCheckbox(1, 'Terminal', '.calculator_terminal-line')

function calculateTotal() {
    const selectedOptions = packageOptions.filter((option) => option.selected)
    if (selectedOptions.length === 0) {
        document.querySelector('.total_line').style.visibility = 'hidden';
    } else {
        if ((packageOptions.filter((option) => option.selected))) {
            const total = packageOptions.filter((option) => option.selected).reduce((acc, curr) => acc + (curr.total instanceof Function ? curr.total() : curr.total), 0)
            document.querySelector('.total_line').style.visibility = 'visible';
            document.querySelector('.total-sum').textContent = `$${total}`
        }
    }
}


function createInputResults(leftSelector, name, rightSelector) {
    let inputText;
    let price;
    let result;
    leftSelector.addEventListener("change", () => {
        inputText = leftSelector.value;
        packageOptions.filter((option) => {
            if (option.name === name) {
                option.quanity = inputText
                price = option.price;
                result = `$${option.total()}`
                option.selected = true
                return (
                    inputText,
                    result,
                    price
                )
            }
            return null
        })

        rightSelector.style.visibility = "visible";
        rightSelector.querySelector('span:nth-of-type(2)').textContent = `${inputText} * ${price}`;
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

inputPackageRef.addEventListener("click", () => {
    const selectElement = document.querySelector('.calculator_select');
    selectElement.classList.toggle('open');
})

function resetBasicProfessionalPremium() {
    packageOptions.forEach(option => {
        if (option.name === 'Basic' || option.name === 'Professional' || option.name === 'Premium') {
            option.selected = false;
            inputPackageRef.textContent = 'Choose package';
        }
    });
}

function createPackagesResultFromList(optionLeftSelector, name) {
    document.querySelector(optionLeftSelector).addEventListener('click', () => {
        const spans = document.querySelectorAll('.calculator_package-line span');
        resetBasicProfessionalPremium();
        document.querySelector('.calculator_package-line').style.visibility = 'visible';
        packageOptions.forEach(option => {
            if (option.name === name) {
                spans[1].textContent = option.name;
                spans[2].textContent = `$${option.total}`;
                option.selected = true;
                inputPackageRef.firstChild.textContent = option.name;
            }
        });
        const selectElement = document.querySelector('.calculator_select');
        selectElement.classList.remove('open');
        calculateTotal()
    })

}

function createResultsForCheckbox(checkboxNumber, name, rightSelector) {
    document.querySelectorAll('.checkbox')[checkboxNumber].addEventListener('click', () => {
        if (document.querySelectorAll('.checkbox')[checkboxNumber].checked) {
            document.querySelector(rightSelector).style.visibility = 'visible'
            packageOptions.filter((option) => {
                if (option.name === name) {
                    option.selected = true;
                }
            })
        } else {
            document.querySelector(rightSelector).style.visibility = 'hidden';
            packageOptions.filter((option) => {
                if (option.name === name) {
                    option.selected = false
                }
            })
        }
        calculateTotal()
    })
}