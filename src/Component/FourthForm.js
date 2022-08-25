import { CircularProgress } from '@material-ui/core';
import React, { useState } from 'react'
import { Check } from '../Assest';

function FourthForm({handleNext, displayName}) {
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = () => {
        setIsLoading(true);
        setTimeout(() => {
            handleNext();
            setIsLoading(false);
        }, 2000);

    }
    return (
        <div className='form-fourth'>
            <div className='form-heading-icon'>
               <img alt="check" src={Check}/>
            </div>
            <div className='form-heading'>
                <p>Congratulations, {displayName ? displayName : "Guest"}! </p>
            </div>
            <div className='form-title'>
                <p>You have completed onboarding, you can start using the eden</p>
            </div>
            <div className='form-completion-section'>
                <div className='form-input-action-section'>
                    <button className='form-button' onClick={handleSubmit}>
                       {isLoading ? <CircularProgress color='grey'/> : "Launch Eden"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FourthForm