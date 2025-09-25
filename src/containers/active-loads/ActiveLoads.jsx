import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadSummary from '../../components/load-summary/LoadSummary';
import './ActiveLoads.scss';

function ActiveLoads() {

    const autoclaveLoads = useSelector(state => state.autoclaveLoads.autoclaveLoads);

    const [selectedLoad, setSelectedLoad] = useState(null);

    const getActiveLoads = () => {
        return autoclaveLoads.filter(load => load.loadStatus === null);
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
                 className="active-loads__load-link"
            >Autoclave ID: {load.loadId}, Autoclave #{load.autoclaveNumber}, Load #{load.loadNumber}
                {/* <h3>Load ID: {load.loadId}</h3>
                <p>Status: {load.passStatus}</p>
                <p>Technician ID: {load.technicianId}</p>
                <p>Date: {load.date}</p>
                <p>Items: {load.items}</p>
                <p>Notes: {load.notes.join(', ')}</p> */}
            </div>
        ));
    }

    return (
        <main className='active-loads'>
            <h3>* Click on autoclave load to open load summary *</h3>
            {renderActiveLoads()}
            {selectedLoad ? <LoadSummary load={selectedLoad} /> : ''}
            {/* {JSON.stringify(autoclaveLoads)} */}
        </main>
    )
}

export default ActiveLoads;
