import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../button/Button';
import PopupConfirmation from '../popup-confirmation/PopupConfirmation';
import { confirmLoadCompletion } from '../../features/autoclave-loads/autoclaveLoadsSlice';
import { currentDateYYYYMMDD } from '../../utils/dateUtils';
import './LoadCompletionConfirmation.scss';

function LoadCompletionConfirmation({ loadId, cancelLoadConfirmation }) {
    const dispatch = useDispatch();

    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const [passStatus, setPassStatus] = useState('');
    const [note, setNote] = useState('');
    const [technicianSignoffId, setTechnicianSignoffId] = useState('');

    const clearConfirmationForm = () => {
        setPassStatus('');
        setNote('');
        setTechnicianSignoffId('');
    }

    return (
        <div className="load-completion-confirmation">
            <div className="load-completion-confirmation__input">
                <label>Passed?:</label>
                <select defaultValue="" onChange={(e) => setPassStatus(e.target.value)}>
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
                <textarea placeholder="Enter notes here..." onChange={(e) => setNote(e.target.value)}/>
            </div>
            <div className='load-completion-confirmation__input-tech-id'>
                <label>Technician ID:</label>
                <input type="number" min='0' onChange={(e) => setTechnicianSignoffId(e.target.value)}/>
            </div>
            <div className='load-completion-confirmation__button-actions'>
                <Button label="Cancel" variant="cancel" onClick={cancelLoadConfirmation} />
                <Button label="Confirm Load Completion" onClick={() => setShowConfirmationPopup(true)} />
            </div>
            <PopupConfirmation
            message={"Are you sure you want to complete this load?"}
                confirmButtonLabel="Yes, Complete Load"
                onConfirm={() => {
                    dispatch(confirmLoadCompletion({
                        loadId: loadId,
                        passStatus: passStatus,
                        note: note ? { 'date': currentDateYYYYMMDD(), 'noteText': note } : null,
                        technicianSignoffId: technicianSignoffId ? technicianSignoffId : null,
                    }));
                    setShowConfirmationPopup(false);
                    clearConfirmationForm();
                    cancelLoadConfirmation();
                }}
                cancelButtonLabel="No, Go Back"
                onCancel={() => setShowConfirmationPopup(false)}
                open={showConfirmationPopup}/>
        </div>
    );
}   

export default LoadCompletionConfirmation;
