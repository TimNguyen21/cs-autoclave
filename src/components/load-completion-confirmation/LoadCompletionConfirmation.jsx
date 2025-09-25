import { useState } from 'react';
import Button from '../button/Button';
import PopupConfirmation from '../popup-confirmation/PopupConfirmation';
import './LoadCompletionConfirmation.scss';

function LoadCompletionConfirmation({ cancelLoadConfirmation }) {

    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

    return (
        <div className="load-completion-confirmation">
            <div className="load-completion-confirmation__input">
                <label>Passed?:</label>
                <select defaultValue="">
                    <option value=""></option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="na">N/A</option>
                </select>
            </div>
            <div className='load-completion-confirmation__input-notes'>
                <label>
                    Notes: <span>*Note Optional if Passed / <span className='load-completion-confirmation__red-text'>REQUIRED NOTE if Failed or N/A selected*</span></span>
                </label>
                <textarea placeholder="Enter notes here..." />
            </div>
            <div className='load-completion-confirmation__input-tech-id'>
                <label>Technician ID:</label>
                <input type="number" min='0' />
            </div>
            <div className='load-completion-confirmation__button-actions'>
                <Button label="Cancel" variant="cancel" onClick={cancelLoadConfirmation} />
                <Button label="Confirm Load Completion" onClick={() => setShowConfirmationPopup(true)} />
            </div>
            <PopupConfirmation
            message={"Are you sure you want to complete this load?"}
                confirmButtonLabel="Yes, Complete Load"
                onConfirm={() => {
                    setShowConfirmationPopup(false);
                    cancelLoadConfirmation();
                }}
                cancelButtonLabel="No, Go Back"
                onCancel={() => setShowConfirmationPopup(false)}
                open={showConfirmationPopup}/>
        </div>
    );
}   

export default LoadCompletionConfirmation;
