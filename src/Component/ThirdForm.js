import React from 'react'
import { user, users } from '../Assest';

function ThirdForm({
    handleNext,
    workspaceUses,
    setWorkspaceUses
}) {
    return (
        <div className='form-third'>
            <div className='form-heading'>
                <p>How are you planning to use Eden? </p>
            </div>
            <div className='form-title'>
                <p>We'll streamline your setup experience accordingly</p>
            </div>
            <div className='form-workspace-select-section'>
                <div className='form-select-cards' onChange={(e) => setWorkspaceUses(e.target.defaultValue)}>
                    <input type="radio" name="uses" value="Self" id="self" className='form-radio-button' defaultChecked />
                    <label className='form-select-card-label' for="self">
                        <div className='form-select-card' id='form-select-card'>
                            <div className='form-select-card-icon'>
                                <img alt="user" src={user} />
                            </div>
                            <div className='form-select-card-heading'>
                                <p>For myself</p>
                            </div>
                            <div className='form-select-card-info'>
                                <p>Write better.Think <br /> more clearly. Stay organized</p>
                            </div>
                        </div>
                    </label>
                    <input type="radio" name="uses" value="My Team" id="team" className='form-radio-button' />
                    <label className='form-select-card-label' for="team">
                        <div className='form-select-card' id='form-select-card'>
                            <div className='form-select-card-icon'>
                                <img alt="users" src={users} />
                            </div>
                            <div className='form-select-card-heading'>
                                <p>With my Team</p>
                            </div>
                            <div className='form-select-card-info'>
                                <p>Wikis, docs, tasks <br /> & projects, all in one place.</p>
                            </div>
                        </div>
                    </label>

                </div>
                <div className='form-input-action-section'>
                    <button className='form-button' onClick={handleNext}>Create Workshop</button>
                </div>

            </div>
        </div>
    )
}

export default ThirdForm