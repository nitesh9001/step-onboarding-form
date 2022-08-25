import React from 'react'

function Step({value, index, activeStep, handleStep, hideLabel  }) {
  return (
    <span className='steps-wrap' style={{"--perIndex": activeStep}} 
          onClick={() => handleStep(index)}>
    <span className={`steps ${index > activeStep ? "" : "active"}`}>
       {index+1}
    </span>
    {hideLabel && <label className='step-label'>{value}</label>}
    </span>
  )
}

export default Step;