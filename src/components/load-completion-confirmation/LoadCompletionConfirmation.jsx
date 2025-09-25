import './LoadCompletionConfirmation.scss';
import Button from '../button/Button';

function LoadCompletionConfirmation({ cancelLoadConfirmation }) {

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
                <Button label="Confirm Load Completion" onClick={() => alert('Complete Load Clicked')} />
            </div>
        </div>
    );
}   

export default LoadCompletionConfirmation;
