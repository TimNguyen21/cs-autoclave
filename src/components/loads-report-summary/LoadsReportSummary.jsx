import { formatDateMMDDYYYYWithSlash } from '../../utils/dateUtils';
import './LoadsReportSummary.scss';

function LoadsReportSummary({ date, autoclaveNumber, loadsData }) {

    const renderNotes = (notes) => {
        if (!notes || notes.length === 0) {
            return <div className='loads-report-summary__note'>N/A</div>
        }

        return notes.map((note, index) => {
            return <div key={index} className='loads-report-summary__note'>* {note.date} - {note.noteText}</div>
        });
    }

    const renderLoadsSummary = () => {
        return loadsData.map((load) => (
            <div className='loads-report-summary__load' key={load.loadId}>
                <div className='loads-report-summary__load-item'>
                    <label>Load ID:</label> {load.loadId}
                </div>
                {autoclaveNumber === 'all' ? 
                    (<div className='loads-report-summary__load-item'>
                        <label>Autoclave #:</label> {load.autoclaveNumber}
                    </div>) : ''}
                <div className='loads-report-summary__load-item'>
                    <label>Load #:</label> {load.loadNumber}
                </div>
                <div className='loads-report-summary__load-item'>
                    <label>Technician ID:</label> {load.technicianId}
                </div>
                <div className='loads-report-summary__load-item'>
                    <label>Passed?:</label> {load.passStatus ? load.passStatus.charAt(0).toUpperCase() + load.passStatus.slice(1) : 'In progress...'}
                </div>
                <div className='loads-report-summary__load-item'>
                    <label>Technician Signoff ID:</label> {load.technicianSignoffId ? load.technicianSignoffId : 'N/A'}
                </div>
                <div className='loads-report-summary__load-item loads-report-summary__load-item--items-summary'>
                    <label>Item Summary:</label>
                    <textarea readOnly value={load.items}></textarea>
                </div>
                <div className='loads-report-summary__load-item'>
                    <label>Notes:</label>
                    {renderNotes(load.notes)}
                </div>
            </div>
        ));
    }

    return (
        <div className='loads-report-summary'>
            <div className='loads-report-summary__header'>
                <label>{autoclaveNumber === 'all' ? 'All Autoclaves' : `Autoclave #${autoclaveNumber}`}</label>
                <label>Date: {formatDateMMDDYYYYWithSlash(date)}</label>
            </div>
            {renderLoadsSummary()}
        </div>
    )
}

export default LoadsReportSummary;
