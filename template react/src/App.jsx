// App.jsx (ou o componente onde FirstPart e Calculator serão renderizados)

import React, { useState } from 'react';
import FirstPart from './components/FirstPart';
import Calculator from './components/Calculator'; 

function App() {
  const [showCalculator, setShowCalculator] = useState(false);

  const handleShowCalculator = () => {
    setShowCalculator(true); 
  };

  return (
    <div className="App">
      <FirstPart onShowCalculator={handleShowCalculator} /> 

      {showCalculator && <Calculator />}
    </div>
  );
}

export default App;