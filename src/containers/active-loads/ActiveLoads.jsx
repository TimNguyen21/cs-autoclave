import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadSummary from '../../components/load-summary/LoadSummary';
import LoadCompletionConfirmation from '../../components/load-completion-confirmation/LoadCompletionConfirmation';
import { formatDateMMDDYYYYWithSlash } from '../../utils/dateUtils';
import './ActiveLoads.scss';

function ActiveLoads() {

    const autoclaveLoads = useSelector(state => state.autoclaveLoads.autoclaveLoads);

    const [selectedLoad, setSelectedLoad] = useState(null);

    const getActiveLoads = () => {
        return autoclaveLoads.filter(load => load.passStatus === null || load.passStatus === '');
    }

    const getSelectedLoadInfo = (loadId) => {
        return autoclaveLoads.find(load => load.loadId === loadId);
    }

    const renderActiveLoads = () => {
        const activeLoads = getActiveLoads();
        if (activeLoads.length === 0) {
            return <p>No active loads</p>;
        }

        return activeLoads.map(load => (
            <div key={load.loadId}
                 id={load.loadId}
                 onClick={(e) => setSelectedLoad(getSelectedLoadInfo(e.currentTarget.id))}
                 className='active-loads__load-link-container'
            >*<label className="active-loads__load-link">Date: {formatDateMMDDYYYYWithSlash(load.date)}, Autoclave #{load.autoclaveNumber}, Load #{load.loadNumber} {`(ID: ${load.loadId})`}</label>
            </div>
        ));
    }

    return (
        <main className='active-loads'>
            <div className='active-loads__form'>
                <h3>* Click on autoclave load to open load summary *</h3>
                <div className={`active-loads__list ${selectedLoad ? "active-loads__list-line-divider" : ""}`}>
                    {renderActiveLoads()}
                </div>
                <div className='active-loads__confirmation'>
                    <div className='active-loads__confirmation--summary'>
                        {selectedLoad ? <LoadSummary loadData={selectedLoad} /> : ''}
                    </div>
                    <div className='active-loads__confirmation--form'>
                        {selectedLoad ? <LoadCompletionConfirmation loadId={selectedLoad.loadId} cancelLoadConfirmation={() => setSelectedLoad(null)} /> : ''}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ActiveLoads;
