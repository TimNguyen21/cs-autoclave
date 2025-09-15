import './LoadEntryForm.scss';
import AutoclaveAvailabilityCheck from '../autoclave-availability-check/AutoclaveAvailabilityCheck';

function LoadEntryForm() {

    return (
        <div className='load-entry-form'>
            <AutoclaveAvailabilityCheck />
        </div>
    )
}

export default LoadEntryForm;
