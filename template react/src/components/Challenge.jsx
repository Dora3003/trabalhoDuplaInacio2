const Challenge = () => {

    const a = 10
    const b = 15

    const handlerSomar = () => {
        alert(a + b)
    }

    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={handlerSomar}>Somar!</button>
        </div>
    )
}

export default Challenge