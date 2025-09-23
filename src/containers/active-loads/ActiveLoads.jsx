import { useSelector } from 'react-redux';
import './ActiveLoads.scss';

function ActiveLoads() {

    const autoclaveLoads = useSelector(state => state.autoclaveLoads.autoclaveLoads);

    const getActiveLoads = () => {
        return autoclaveLoads.filter(load => load.loadStatus === null);
    }

    const renderActiveLoads = () => {
        const activeLoads = getActiveLoads();
        if (activeLoads.length === 0) {
            return <p>No active loads</p>;
        }

        return activeLoads.map(load => (
            <div key={load.loadId}
                 id={load.loadId}
                 onClick={(e) => alert(`${e.target.id}, Summary: ${load.items}`)}
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
            {/* {JSON.stringify(autoclaveLoads)} */}
        </main>
    )
}

export default ActiveLoads;