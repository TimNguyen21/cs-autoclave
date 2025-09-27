import './LoadSummary.scss';
import { formatDateMMDDYYYYWithSlash } from '../../utils/dateUtils';

function LoadSummary({ loadData }) {
    const { loadId, date, technicianId, autoclaveNumber, loadNumber, items } = loadData;

    return (
        <div className="load-summary">
            <div><b>Load ID:</b> {loadId}</div>
            <div><b>Date:</b> {formatDateMMDDYYYYWithSlash(date)}</div>
            <div><b>Technician ID:</b> {technicianId}</div>
            <div><b>Autoclave:</b> {autoclaveNumber}</div>
            <div><b>Load:</b> {loadNumber}</div>
            <div><b>Items Summary:</b> {items}</div>
        </div>
    );
}

export default LoadSummary;
