import { useState } from 'react';
import Button from '../button/Button';
import './AutoclaveAvailabilityCheck.scss';

function AutoclaveAvailabilityCheck(props) {

    return (
        <div className='autoclave-availability-check'>
            <div className='autoclave-availability-check__input'>
                <label>Autoclave #:</label>
                <select
                    id='autoclave-number'
                    value={props.autoclaveNumber}
                    onChange={(e) => props.setAutoclaveNumber(e.target.value)}
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
                    value={props.loadNumber}
                    onChange={(e) => props.setLoadNumber(e.target.value)}
                />
            </div>
            <div className='autoclave-availability-check__input'>
                <label>Technician ID:</label>
                <input
                    id='technician-id'
                    type='number'
                    min='0'
                    value={props.technicianId}
                    onChange={(e) => props.setTechnicianId(e.target.value)}
                />
            </div>
            <div className='autoclave-availability-check__input'>
                <label>Date:</label>
                <input
                    id='date'
                    type='date'
                    min='0'
                    value={props.date}
                    onChange={(e) => props.setDate(e.target.value)}
                />
            </div>
            <div className='autoclave-availability-check__actions'>
                <Button label='Confirm Load Availability' onClick={() => alert(`${props.date}, ${props.autoclaveNumber}, ${props.loadNumber}, ${props.technicianId}`)} />
            </div>
        </div>
    )
}

export default AutoclaveAvailabilityCheck;
