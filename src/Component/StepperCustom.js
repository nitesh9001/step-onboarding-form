import React from 'react'
import Step from '../Elements/Step'

function StepperCustom({ steps, activeStep, handleStep, hideLabel }) {
  const handleSteps = (i) => {
    handleStep(i);
  };
  return (
    <div className='stepper-warper'>
      {steps.map((value, index) =>
        <Step
          key={index}
          value={value}
          index={index}
          activeStep={activeStep} 
          handleStep={handleSteps}
          hideLabel={hideLabel} />
      )}
    </div>
  )
}

export default StepperCustom