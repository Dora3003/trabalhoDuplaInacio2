const Calculator = () => {
    function setTextResult(result) {
        const resultText = document.querySelector('.result')
        resultText.innerHTML = `Resultado: ${result}`
    }

    const handleSum = (x, y) => {
        setTextResult(x + y)
    }

    const handleSubtraction = (x, y) => {
        setTextResult(x - y)
    }

    const handleMultiplication = (x, y, result) => {
        setTextResult(x * y)
    }

    const handleDivision = (x, y, result) => {
        setTextResult(x / y)
    }

    

    return (
        <div>
            <form action="">
                <input type="number" id="n1" placeholder="Número 1" />
                <input type="number" id="n2" placeholder="Número 2" />
            </form>
            <button onClick={() => handleSum(Number(n1.value), Number(n2.value))}>Somar ( + )</button>
            <button onClick={() => handleSubtraction(Number(n1.value), Number(n2.value))}>Subtrair ( - )</button>
            <button onClick={() => handleMultiplication(Number(n1.value), Number(n2.value))}>Multiplicar ( x )</button>
            <button onClick={() => handleDivision(Number(n1.value), Number(n2.value))}>Dividir ( / )</button>
            <p className="result">Resultado: </p>
        </div>
    )
}

export default Calculator