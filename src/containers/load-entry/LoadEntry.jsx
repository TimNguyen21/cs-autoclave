import { useState } from 'react';
import LoadEntryForm from '../../components/load-entry-form/LoadEntryForm';
import './LoadEntry.scss';

function LoadEntry() {
    const [loadSummary, setLoadSummary] = useState('');
    const [showPreview, setShowPreview] = useState(false);

    function capitalizeWordsWithCondition(str) {
        // Split the string into an array of words
        return str.split(" ").map(word => {
            // Check if the word contains 'x' or 'X' followed by a number
            if (/[xX]\d/.test(word)) {
            // If it matches, return the word as-is
            return word;
            } else {
            // Otherwise, capitalize the first letter and make the rest lowercase
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        }).join(" "); // Join the words back into a string
    }

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
                {loadSummary ? <>{capitalizeWordsWithCondition(loadSummary)}</> : 'No items to preview'}
            </div>
        </main>
    )
}

export default LoadEntry;
