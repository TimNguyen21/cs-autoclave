import { useState } from 'react';
import Button from '../button/Button';
import AutoclaveAvailabilityCheck from '../autoclave-availability-check/AutoclaveAvailabilityCheck';
import './LoadEntryForm.scss';

function LoadEntryForm() {
    const today = new Date().toISOString().split('T')[0];
    let defaultItemProperties = {
        id: Date.now(),
        name: '',
        quantity: '',
    }

    const [date, setDate] = useState(today);
    const [autoclaveNumber, setAutoclaveNumber] = useState('');
    const [loadNumber, setLoadNumber] = useState('');
    const [technicianId, setTechnicianId] = useState('');
    const [isAutoclaveValid, setIsAutoclaveValid] = useState(false);
    const [itemsList, setItemsList] = useState([defaultItemProperties]);

    const clearForm = () => {
        setDate(today);
        setAutoclaveNumber('');
        setLoadNumber('');
        setTechnicianId('');
        setIsAutoclaveValid(false);
    };

    const renderItems = () => {
        return itemsList.map((item, index) => {
            return <div key={item.id}>{`${item.id} ${item.name} - Qty: ${item.quantity}`}</div>
        });
    };

    return (
        <div className='load-entry-form'>
            <div className='load-entry-form__autoclave-availability-check'>
                <AutoclaveAvailabilityCheck
                    date={date}
                    autoclaveNumber={autoclaveNumber}
                    loadNumber={loadNumber}
                    technicianId={technicianId}
                    isAutoclaveValid={isAutoclaveValid}
                    setIsAutoclaveValid={setIsAutoclaveValid}
                    setDate={setDate}
                    setAutoclaveNumber={setAutoclaveNumber}
                    setLoadNumber={setLoadNumber}
                    setTechnicianId={setTechnicianId}
                />
            </div>
            <div className={`${isAutoclaveValid ? 'load-entry-form__items-entry' : 'load-entry-form__hidden'}`}>
                {renderItems()}
            </div>
            <div className={`${isAutoclaveValid ? 'load-entry-form__actions' : 'load-entry-form__hidden'}`}>
                <Button label='Cancel' variant='cancel' onClick={clearForm} />
                <Button label='Submit Load' onClick={() => alert('Form submitted')} />
            </div>
        </div>
    )
}

export default LoadEntryForm;
