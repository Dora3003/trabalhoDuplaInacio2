const TemplateExpressions = () => {
    const name = "Rodox"
    const data = {
        age: 22,
        job: 'Programador'
    }
    return (
        <div>
            <p>Olá {name}, tudo bem?</p>
            <p>Você atua como: {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    )
}

export default TemplateExpressions