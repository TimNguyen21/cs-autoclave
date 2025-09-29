import { useState, useEffect, use } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/button/Button';
import LoadsReportSummary from '../../components/loads-report-summary/LoadsReportSummary';
import PopupConfirmation from '../../components/popup-confirmation/PopupConfirmation';
import { addNote } from '../../features/autoclave-loads/autoclaveLoadsSlice';
import { currentDateYYYYMMDD } from '../../utils/dateUtils';
import './Search.scss';

function Search() {
    const loadsData = useSelector((state) => state.autoclaveLoads.autoclaveLoads);

    const [currentSearchInput, setCurrentSearchInput] = useState('');
    const [currentLoad, setCurrentLoad] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [noResultsMessage, setNoResultsMessage] = useState('');
    const [currentNewNote, setCurrentNewNote] = useState('');
    const [showAddNotePopup, setShowAddNotePopup] = useState(false);

    const dispatch = useDispatch();

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

    useEffect(() => {
        const load = getLoad(currentSearchInput);
        if (load) {
            setCurrentLoad(load);
        }
    }, [loadsData]);

    return (
        <main className='search'>
            <div className='search__container'>
                <div className='search__query'>
                    <div className='search__input'>
                        <label>Search by LOAD ID:</label>
                        <input type='text' value={currentSearchInput} onChange={(e) => setCurrentSearchInput(e.target.value)} />
                    </div>
                    <div className='search__button'>
                        <Button label="Search Load" onClick={() => handleSearch()} disabled={showResult}/>
                        {showResult ? <Button label="New Search"
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
                <div className='search__button--add-note-actions'>
                    <Button label="Close"
                            variant='cancel'
                            onClick={() => {
                                setShowResult(false);
                                setCurrentLoad(null);
                                setCurrentSearchInput('');
                                setCurrentNewNote('');
                            }} />
                    <Button label="Add New Note" onClick={() => setShowAddNotePopup(true)} />
                </div>
                </>) : null}
                <PopupConfirmation open={showAddNotePopup}
                                   message='Are you sure you want to add this note? Once added, it cannot be edited or deleted.'
                                   onCancel={() => setShowAddNotePopup(false)} 
                                   onConfirm={() => {
                                        dispatch(addNote({ loadId: currentLoad.loadId, noteText: { 'date': currentDateYYYYMMDD(), noteText: currentNewNote } }));
                                        setCurrentNewNote('');
                                        setShowAddNotePopup(false);
                                   }} />
            </div>
        </main>
    )
}

export default Search;
