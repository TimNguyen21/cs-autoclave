import './LoadSummary.scss';
import { formatDateMMDDYYYYWithSlash } from '../../utils/dateUtils';

function LoadSummary({ loadData }) {
    const { loadId, date, technicianId, autoclaveNumber, loadNumber, items } = loadData;

    return (
        <div className="load-summary">
            <div className="load-summary__item"><b>Load ID:</b> {loadId}</div>
            <div className="load-summary__item"><b>Date:</b> {formatDateMMDDYYYYWithSlash(date)}</div>
            <div className="load-summary__item"><b>Technician ID:</b> {technicianId}</div>
            <div className="load-summary__item"><b>Autoclave:</b> {autoclaveNumber}</div>
            <div className="load-summary__item"><b>Load:</b> {loadNumber}</div>
            <div className="load-summary__item"><b>Items Summary:</b> {items}</div>
        </div>
    );
}

export default LoadSummary;
