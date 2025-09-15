import { useState } from 'react';
import LoadEntryForm from '../../components/load-entry-form/LoadEntryForm';
import './LoadEntry.scss';

function LoadEntry() {
    const [loadSummary, setLoadSummary] = useState('');
    const [showPreview, setShowPreview] = useState(false);

    return (
        <main className='load-entry'>
            <div className='load-entry__main'>
                <LoadEntryForm
                    getLoadSummary={setLoadSummary}
                    setShowPreview={setShowPreview}
                />
            </div>
            <div className={`${showPreview ? 'load-entry__preview' : 'load-entry__hidden'}`}>
                <label>Load Summary:</label>
                {loadSummary ? <>{loadSummary}</> : 'No items to preview'}
            </div>
        </main>
    )
}

export default LoadEntry;
