import { useState } from 'react';
import Button from '../button/Button';
import './AutoclaveAvailabilityCheck.scss';

function AutoclaveAvailabilityCheck() {

    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(today);
    const [autoclaveNumber, setAutoclaveNumber] = useState('');
    const [loadNumber, setLoadNumber] = useState('');
    const [technicianId, setTechnicianId] = useState('');

    return (
        <div className='autoclave-availability-check'>
            <div className='autoclave-availability-check__input'>
                <label>Autoclave #:</label>
                <select
                    id='autoclave-number'
                    value={autoclaveNumber}
                    onChange={(e) => setAutoclaveNumber(e.target.value)}
                >
                    <option value='' selected disabled></option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
            </div>
            <div className='autoclave-availability-check__input'>
                <label>Load #:</label>
                <input
                    id='load-number'
                    type='number'
                    min='0'
                    value={loadNumber}
                    onChange={(e) => setLoadNumber(e.target.value)}
                />
            </div>
            <div className='autoclave-availability-check__input'>
                <label>Technician ID:</label>
                <input
                    id='technician-id'
                    type='number'
                    min='0'
                    value={technicianId}
                    onChange={(e) => setTechnicianId(e.target.value)}
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
                />
            </div>
            <div className='autoclave-availability-check__actions'>
                <Button label='Confirm Load Availability' onClick={() => alert(`${date}, ${autoclaveNumber}, ${loadNumber}, ${technicianId}`)} />
            </div>
        </div>
    )
}

export default AutoclaveAvailabilityCheck;
