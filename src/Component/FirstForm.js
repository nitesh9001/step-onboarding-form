import React from 'react'

function FirstForm({ handleNext, setDisplayName, setFullName, displayName, fullName }) {

    return (
        <div className='form-first'>
            <div className='form-heading'>
                <p>Welcome! First things first... </p>
            </div>
            <div className='form-title'>
                <p>You can always change them later</p>
            </div>
            <div className='form-input-name-section'>
                <div className='form-input-fullname-section'>
                    <label className='form-label'>Full Name</label>
                    <input className='form-input'
                        placeholder='Steve Jobs'
                        onChange={(e) => setFullName(e.target.value)}
                        type="text"
                        value={fullName}
                    />
                </div>
                <div className='form-input-displayname-section'>
                    <label className='form-label'>Display Name</label>
                    <input className='form-input'
                        placeholder='Steve'
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </div>
                <div className='form-input-action-section'>
                    <button className='form-button' onClick={handleNext}>Create Workshop</button>
                </div>
            </div>
        </div>
    )
}

export default FirstForm