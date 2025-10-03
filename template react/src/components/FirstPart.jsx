import FirstComponent from './FirstComponent'
import TemplateExpressions from './TemplateExpressions'
import MyComponent from './MyComponent'
import Events from './Events'
import Challenge from './Challenge'
import FinalChallenge from './FinalChallenge'
import Calculator from './Calculator'

const FirstPart = ({ onShowCalculator }) => {
return (
    <div>
        <h1>Fundamentos React</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
        <MyComponent /> 
        <Events />
        <Challenge />
        <FinalChallenge x={5} y={7} />
        <FinalChallenge x={10} y={20} />
        <FinalChallenge x={3} y={9} />
        <button onClick={onShowCalculator}>Mostrar Calculadora</button>
    </div>
)
}

export default FirstPart
