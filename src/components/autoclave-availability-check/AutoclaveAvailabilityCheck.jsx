import Button from '../button/Button';
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
    setTechnicianId
}) {

    return (
        <div className='autoclave-availability-check'>
            <div className='autoclave-availability-check__input'>
                <label>Autoclave #:</label>
                <select
                    id='autoclave-number'
                    value={autoclaveNumber}
                    onChange={(e) => setAutoclaveNumber(e.target.value)}
                    disabled={isAutoclaveValid}
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
                    disabled={isAutoclaveValid}
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
                    onClick={() => setIsAutoclaveValid(true)}
                    disabled={isAutoclaveValid}
                />
            </div>
        </div>
    )
}

export default AutoclaveAvailabilityCheck;
