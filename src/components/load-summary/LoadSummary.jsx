import './LoadSummary.scss';

function LoadSummary({ load }) {

    return (
        <div className="load-summary">
            <div><b>Load ID:</b> {load.loadId}</div>
            <div><b>Date:</b> {load.date}</div>
            <div><b>Technician ID:</b> {load.technicianId}</div>
            <div><b>Autoclave:</b> {load.autoclaveNumber}</div>
            <div><b>Load:</b> {load.loadNumber}</div>
            <div><b>Items Summary:</b> {load.items}</div>
        </div>
    );
}

export default LoadSummary;
