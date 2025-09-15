import LoadEntryForm from '../../components/load-entry-form/LoadEntryForm';
import './LoadEntry.scss';

function LoadEntry() {

    return (
        <main className='load-entry'>
            <div className='load-entry__main'>
                <LoadEntryForm />
            </div>
            <div className='load-entry__preview'>preview</div>
        </main>
    )
}

export default LoadEntry;
