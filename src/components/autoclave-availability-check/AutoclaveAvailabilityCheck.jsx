import { useState } from 'react';
import Button from '../button/Button';
import PopupConfirmation from '../popup-confirmation/PopupConfirmation';
import './AutoclaveAvailabilityCheck.scss';

function AutoclaveAvailabilityCheck({
    date,
    autoclaveNumber,
    loadNumber,
    technicianId,
    isAutoclaveValid,
    setIsAutoclaveValid,
    setDate,
    setAutoclaveNumber,
    setLoadNumber,
    setTechnicianId,
}) {

    const [autoclaveConfirmationEmptyInput, setAutoclaveConfirmationEmptyInput] = useState({
        autoclaveNumber: false,
        loadNumber: false,
        technicianId: false,
        date: false,
    });

    const [showPopupConfirmation, setShowPopupConfirmation] = useState(false);

    const formHasEmptyInput = () => {
        const inputFields = { autoclaveNumber, loadNumber, technicianId, date };

        // Build an object of empty states
        const emptyInputs = Object.fromEntries(
            Object.entries(inputFields).map(([key, value]) => [key, value.trim() === ""])
        );

        // Update state in one go
        setAutoclaveConfirmationEmptyInput(emptyInputs);

        // Return whether any field is empty
        return Object.values(emptyInputs).some(Boolean);
    }

    const checkAutoclaveAvailability = () => {
        if (!formHasEmptyInput()) {
            setIsAutoclaveValid(true);
        } else {
            setShowPopupConfirmation(true);
        }
    }

    return (
        <div className='autoclave-availability-check'>
            <div className='autoclave-availability-check__input'>
                <label className={autoclaveConfirmationEmptyInput.autoclaveNumber ? 'autoclave-availability-check__input--error' : ''}>Autoclave #:</label>
                <select
                    id='autoclave-number'
                    value={autoclaveNumber}
                    onChange={(e) => setAutoclaveNumber(e.target.value)}
                    disabled={isAutoclaveValid}
                >
                    <option defaultValue='' disabled></option>
                    <option value='9'>9</option>
                    <option value='12'>12</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                </select>
            </div>
            <div className='autoclave-availability-check__input'>
                <label className={autoclaveConfirmationEmptyInput.loadNumber ? 'autoclave-availability-check__input--error' : ''}>Load #:</label>
                <input
                    id='load-number'
                    type='number'
                    min='0'
                    value={loadNumber}
                    onChange={(e) => setLoadNumber(e.target.value)}
                    disabled={isAutoclaveValid}
                />
            </div>
            <div className='autoclave-availability-check__input'>
                <label className={autoclaveConfirmationEmptyInput.technicianId ? 'autoclave-availability-check__input--error' : ''}>Technician ID:</label>
                <input
                    id='technician-id'
                    type='number'
                    min='0'
                    value={technicianId}
                    onChange={(e) => setTechnicianId(e.target.value)}
                    disabled={isAutoclaveValid}
                />
            </div>
            <div className='autoclave-availability-check__input'>
                <label>Date:</label>
                <input
                    id='date'
                    type='date'
                    min='0'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    disabled={isAutoclaveValid}
                />
            </div>
            <div className='autoclave-availability-check__actions'>
                <Button
                    label='Confirm Load Availability'
                    onClick={checkAutoclaveAvailability}
                    disabled={isAutoclaveValid}
                />
            </div>
            <PopupConfirmation
                message='Please fill in all required fields.'
                onConfirm={() => setShowPopupConfirmation(false)}
                confirmButtonLabel='OK'
                open={showPopupConfirmation}
            />
        </div>
    )
}

export default AutoclaveAvailabilityCheck;
