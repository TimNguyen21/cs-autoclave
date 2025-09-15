import { useState } from 'react';
import Button from '../button/Button';
import AutoclaveAvailabilityCheck from '../autoclave-availability-check/AutoclaveAvailabilityCheck';
import './LoadEntryForm.scss';

function LoadEntryForm() {
    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(today);
    const [autoclaveNumber, setAutoclaveNumber] = useState('');
    const [loadNumber, setLoadNumber] = useState('');
    const [technicianId, setTechnicianId] = useState('');

    return (
        <div className='load-entry-form'>
            <div className='load-entry-form__autoclave-availability-check'>
                <AutoclaveAvailabilityCheck
                    date={date}
                    autoclaveNumber={autoclaveNumber}
                    loadNumber={loadNumber}
                    technicianId={technicianId}
                    setDate={setDate}
                    setAutoclaveNumber={setAutoclaveNumber}
                    setLoadNumber={setLoadNumber}
                    setTechnicianId={setTechnicianId}
                />
            </div>
            <div className='load-entry-form__items-entry'>
                items inputs here
            </div>
            <div className='load-entry-form__actions'>
                <Button label='Submit Load' onClick={() => alert('Form submitted')} />
            </div>
        </div>
    )
}

export default LoadEntryForm;
