// const calc = (price = 100) => {
//     const calcBlock = document.getElementById('calc')
//     const calcType = document.getElementById('calc-type')
//     const calcMaterial = document.getElementById('calc-type-material')
//     const calcInput = document.getElementById('calc-input')
//     const total = document.getElementById('calc-total')
//     const result = document.getElementById("result");

//     const countCalc = () => {
//         const calcTypeValue = +calcType.options[calcType.selectedIndex].value
//         const calcInputValue = calcInput.value

//         let totalValue = 0

//         if (calcType.value && calcInput.value) {
//             totalValue = price * calcTypeValue * calcInputValue
//         } else {
//             totalValue = 0
//         }

//         total.textContent = totalValue
//     }


//     calcBlock.addEventListener('input', (e) => {
//         if (e.target === calcType || e.target === calcMaterial ||
//             e.target === calcInput) {
//                 countCalc()
//             }
//     })

//     result.innerHTML = price;
// }

// export default calc