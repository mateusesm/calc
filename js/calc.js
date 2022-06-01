const visor = document.querySelector('#visor')

let numbersCalc = []

let sinal = ''

let parcialResult = 0

let finalResult = 0

function calculate(num = []) {

    let result = 0

    if (sinal != '') {

        switch (sinal) {

            case '+':
                result = num[0] + num[1]
            break

            case '-':
                result = num[0] - num[1]
            break

            case 'x':
                result = num[0] * num[1]
            break

            case '/':
                result = num[0] / num[1]
            break

        }

        return result

    }

}

function getOperator(operator) {

    sinal = operator

    if (numbersCalc == '') {

        numbersCalc.push(Number(visor.value))

        visor.value = ''

    }else {

        numbersCalc.push(Number(visor.value))
        
        parcialResult = calculate(numbersCalc)

        visor.value = ''
        numbersCalc = []

    }

}

function getNumber(num) {

    visor.value += num

}

function deleteNumber() {

    visor.value = ''
    sinal = ''
    numbersCalc = []
    finalResult = 0
    parcialResult = 0

}

function equality() {

    if (parcialResult != '') {

        numbersCalc.push(parcialResult)

        numbersCalc.push(Number(visor.value))

        parcialResult = calculate(numbersCalc)

    }else {

        numbersCalc.push(Number(visor.value))

        parcialResult = calculate(numbersCalc)

    }

    finalResult = parcialResult

    visor.value = finalResult

    numbersCalc = []
    parcialResult = 0
    finalResult = 0
    sinal = ''

}