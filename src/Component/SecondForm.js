import React from 'react'

function SecondForm({ 
    handleNext, 
    setWorkspaceName, 
    setWorkspaceURL, 
    workspaceName, 
    workspaceURL 
}) {
    const defaultUrl = 'www.eden.com/';

    const urlCreator = (e) => {
        let url = defaultUrl + e.target.value;
        console.log("Full workspace url is ", url);
        setWorkspaceURL(e.target.value);
    };

    return (
        <div className='form-second'>
            <div className='form-heading'>
                <p>Let's set up a home for all your work </p>
            </div>
            <div className='form-title'>
                <p>You can always create another workspace later</p>
            </div>
            <div className='form-input-name-section'>
                <div className='form-input-fullname-section'>
                    <label className='form-label'>Workspace Name</label>
                    <input className='form-input' 
                        placeholder='Eden'
                        type="text"
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)} 
                    />
                </div>
                <div className='form-input-displayname-section'>
                    <label className='form-label'>Workspace URL <span className='option-label'>(optional)</span></label>
                    <div className='form-input-url' >
                        <input className='url-fixed' placeholder='Steve' type="text" value = {defaultUrl} disabled />
                        <input className='url-routes' 
                            placeholder='Welcome' 
                            type="text" 
                            value={workspaceURL}
                            onChange={(e) => urlCreator(e)}
                        />
                    </div>
                </div>
                <div className='form-input-action-section'>
                    <button className='form-button' onClick={handleNext}>Create Workshop</button>
                </div>
            </div>
        </div>
    )
}

export default SecondForm