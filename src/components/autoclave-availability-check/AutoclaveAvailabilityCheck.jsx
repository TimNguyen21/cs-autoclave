import React, { useState } from 'react';

import './AutoclaveAvailabilityCheck.scss';

function AutoclaveAvailabilityCheck() {

    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(today);

    return (
        <div className='autoclave-availability-check'>
            <div className='autoclave-availability-check__input'>
                <label>Autoclave #:</label>
                <select>
                    <option value='' selected disabled></option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
            </div>
            <div className='autoclave-availability-check__input'>
                <label>Load #:</label>
                <input
                    type='number'
                    min='0'
                />
            </div>
            <div className='autoclave-availability-check__input'>
                <label>Technician ID:</label>
                <input
                    type='number'
                    min='0'
                />
            </div>
            <div className='autoclave-availability-check__input'>
                <label>Date:</label>
                <input
                    type='date'
                    min='0'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
        </div>
    )
}

export default AutoclaveAvailabilityCheck;
