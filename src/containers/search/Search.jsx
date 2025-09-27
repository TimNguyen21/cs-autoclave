import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/button/Button';
import LoadsReportSummary from '../../components/loads-report-summary/LoadsReportSummary';
import './Search.scss';

function Search() {
    const loadsData = useSelector((state) => state.autoclaveLoads.autoclaveLoads);

    const [currentSearchInput, setCurrentSearchInput] = useState('');
    const [currentLoad, setCurrentLoad] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [noResultsMessage, setNoResultsMessage] = useState('');
    const [currentNewNote, setCurrentNewNote] = useState('');

    const getLoad = (loadId) => {
        return loadsData.find((load) => load.loadId.toLowerCase() === loadId.toLowerCase());
    }

    const handleSearch = () => {
        const load = getLoad(currentSearchInput);
        if (load) {
            setCurrentLoad(load);
            setShowResult(true);
            setNoResultsMessage('');
        } else {
            setCurrentLoad(null);
            setShowResult(false);
            setNoResultsMessage('No results found');
        }
    }

    const renderSearchResult = () => {
        if (showResult) {
            return <LoadsReportSummary date={currentLoad.date}
                                       autoclaveNumber={currentLoad.autoclaveNumber}
                                       loadsData={[currentLoad]} />
        }
    }

    return (
        <main className='search'>
            <div className='search__container'>
                <div className='search__query'>
                    <div className='search__input'>
                        <label>Search by LOAD ID:</label>
                        <input type='text' value={currentSearchInput} onChange={(e) => setCurrentSearchInput(e.target.value)} />
                    </div>
                    <div className='search__button'>
                        <Button label="Search Load" onClick={() => handleSearch()} />
                        {showResult ? <Button label="Close"
                                              variant='cancel'
                                              onClick={() => {
                                                    setShowResult(false);
                                                    setCurrentLoad(null);
                                                    setCurrentSearchInput('');
                                              }} /> : null}
                        {noResultsMessage ? <div className='search__no-result'>{noResultsMessage}</div> : null}
                    </div>
                </div>
                <div className={`${showResult ? 'search__result' : 'search__result--hidden'}`}>
                    {renderSearchResult()}
                </div>
                {showResult ? (<>
                <div className='search__add-note'>
                    <label>Add Note:</label>
                    <textarea name="add-note" value={currentNewNote} onChange={(e) => setCurrentNewNote(e.target.value)}></textarea>
                </div>
                <div className='search__button--add-note'>
                    <Button label="Add New Note" onClick={() => {}} />
                </div>
                </>) : null}
            </div>
        </main>
    )
}

export default Search;
