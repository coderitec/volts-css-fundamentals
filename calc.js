document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('input[disabled]')
    const buttons = document.querySelectorAll('.btn')

    const operators = {
        '÷': '/',
        '×': '*',
        '−': '-',
        '+': '+',
    }
    let expression = ''

    const isOperator = char => Object.keys(operators).includes(char)

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent.trim()

            if (value === 'AC') {
                expression = ''
                display.value = ''
                return
            }

            if(value === '='){
                try{
                    const evaluated = eval(expression)
                    display.value = evaluated;
                    expression = evaluated.toString()
                } catch (error) {
                    display.value = 'MISTAKE'
                    expression = ''
                }
                return
            }

            const mappedValue = operators[value] || value

            // if(isOperator(value) &&(expression === '' || isOperator(expression.slice(-1)))) {
            //     return
            // }

            expression += mappedValue
            display.value = expression
        })
    })

})