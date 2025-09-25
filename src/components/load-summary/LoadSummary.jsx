import './LoadSummary.scss';
import { formatDateMMDDYYYYWithSlash } from '../../utils/dateUtils';

function LoadSummary({ loadData }) {

    return (
        <div className="load-summary">
            <div><b>Load ID:</b> {loadData.loadId}</div>
            <div><b>Date:</b> {formatDateMMDDYYYYWithSlash(loadData.date)}</div>
            <div><b>Technician ID:</b> {loadData.technicianId}</div>
            <div><b>Autoclave:</b> {loadData.autoclaveNumber}</div>
            <div><b>Load:</b> {loadData.loadNumber}</div>
            <div><b>Items Summary:</b> {loadData.items}</div>
        </div>
    );
}

export default LoadSummary;
