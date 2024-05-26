import ButtonsContainer from "./components/BottonsContainer";
import Display from './components/Display';

import styles from './App.module.css'
import { useState } from "react";


function App() { 
  const [calVal, setcalVal] = useState("")
  
  const onButtonClick = (buttonText)  => {
    if (buttonText === 'c') {
      setcalVal("");
    } else if (buttonText=== '='){
      const result = eval(calVal);
      setcalVal(result);
    } else{
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };



  return (
    <div className={styles.calculater}>
       <Display displayValue={calVal}></Display>
       <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
      
    
  )
}

export default App
