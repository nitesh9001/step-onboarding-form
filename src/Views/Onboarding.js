import React, { useState } from 'react'
import { Logo } from '../Assest';
import FirstForm from '../Component/FirstForm';
import FourthForm from '../Component/FourthForm';
import SecondForm from '../Component/SecondForm';
import ThirdForm from '../Component/ThirdForm';
import StepperCustom from '../Component/StepperCustom';

const Onboarding = () => {
  const steps = ['Name', 'Workspace', 'User', 'Submit'];
  const [displayName, setDisplayName] = useState('');
  const [fullName, setFullName] = useState('');
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceURL, setWorkspaceURL] = useState('');
  const [workspaceUses, setWorkspaceUses] = useState('Self');
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep < steps.length){
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleStep = (step) => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setDisplayName('');
    setFullName('');
    setWorkspaceName('');
    setWorkspaceURL('Self');
    setWorkspaceUses('');
  }

  const renderStepsForm = (selectedForm) => {
     switch (selectedForm) {
      case 0:
        return <FirstForm 
                handleNext={handleNext}
                setDisplayName={setDisplayName}
                setFullName={setFullName} 
                displayName={displayName}
                fullName={fullName} 
              />
        
      case 1: 
        return <SecondForm 
                handleNext={handleNext}
                setWorkspaceName={setWorkspaceName}
                setWorkspaceURL={setWorkspaceURL}
                workspaceName={workspaceName}
                workspaceURL={workspaceURL}
              />
      case 2:
        return <ThirdForm
                handleNext={handleNext}
                setWorkspaceUses={setWorkspaceUses}
                workspaceUses={workspaceUses}
              />
        
      case 3:
        return <FourthForm 
                handleNext={handleNext} 
                displayName={displayName}
              />
      default:
        return <div className='default-result'>
                  <h4>Enjoy coffee! While we setup for you</h4>
                  <div className='label-info'>Full Name: <span>{fullName}</span></div>
                  <div className='label-info'>Display Name: <span>{displayName}</span></div>
                  <div className='label-info'>Workspace Name: <span>{workspaceName}</span></div>
                  <div className='label-info'>Workspace URL: <span>{`www.eden.com/${workspaceURL}`}</span></div>
                  <div className='label-info'>Workspace Purpose: <span>{workspaceUses}</span></div>
                  <div className='default-result-button'>
                    <button className='form-button' onClick={handleReset}>Create New Workspace</button>
                  </div>
               </div>
     }
  }
  return (
    <div className="App-main-wrapper">
      <div className='stepper-form-box'>
        <div className='stepper-logo-section'>
          <div className='logo-eden'>
            <img alt="eden" src={Logo} /> <div className='logo-text-eden'>Eden</div>
          </div>
          <div className='stepper-action-ui'>
            <StepperCustom
              steps={steps}
              activeStep={activeStep} 
              handleStep={handleStep}
              hideLabel={false}
            />
          </div>
        </div>
        <div className='tabs-switcher-form'>
           {renderStepsForm(activeStep)}
        </div>
      </div>
    </div>
  )
}

export default Onboarding