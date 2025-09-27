import Button from '../../components/button/Button';
import './LoadsReportQuery.scss';

function LoadsReportQuery({ setSelectedQueryDate, selectedQueryDate, selectedQueryAutoclaveNumber, setSelectedQueryAutoclaveNumber, showLoadsReportResults, setLoadsReportResults }) {

    return (
        <div className='loads-report-query'>
            <div className='loads-report-query__input'>
                <label>Select Date:</label>
                <input className='loads-report-query__input-date' type='date' value={selectedQueryDate} onChange={(e) => setSelectedQueryDate(e.target.value)} disabled={showLoadsReportResults}/>
            </div>
            <div className='loads-report-query__input'>
                <label>Select Autoclave:</label>
                <select className='loads-report-query__input-select' value={selectedQueryAutoclaveNumber} onChange={(e) => setSelectedQueryAutoclaveNumber(e.target.value)} disabled={showLoadsReportResults}>
                    <option value='' disabled></option>
                    <option value='all'>All</option>
                    <option value='9'>9</option>
                    <option value='12'>12</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                </select>
            </div>
            <div className='loads-report-query__button-actions'>
                <Button label="Generate Report" 
                        onClick={() => setLoadsReportResults(true)} 
                        disabled={showLoadsReportResults}/>
                {showLoadsReportResults ? <Button label="Reset" 
                        variant='cancel' 
                        onClick={() => {
                            setSelectedQueryDate('');
                            setSelectedQueryAutoclaveNumber('');
                            setLoadsReportResults(false);
                        }} /> : null }
            </div>
        </div>
    )
}

export default LoadsReportQuery;
