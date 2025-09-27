import { useState } from 'react';
import Button from '../../components/button/Button';
import './LoadsReportQuery.scss';

function LoadsReportQuery({ 
    setSelectedQueryDate,
    selectedQueryDate,
    selectedQueryAutoclaveNumber,
    setSelectedQueryAutoclaveNumber,
    showLoadsReportResults,
    setLoadsReportResults,
    setValidLoadsReportQuery}) {

    const [dateInputHasError, setDateInputHasError] = useState(false);
    const [autoclaveInputHasError, setAutoclaveInputHasError] = useState(false);

    const validInputCheck = () => {
        if (selectedQueryDate === '' || selectedQueryAutoclaveNumber === '') {
            setValidLoadsReportQuery(false);
            (selectedQueryDate === '') ? setDateInputHasError(true) : setDateInputHasError(false);
            (selectedQueryAutoclaveNumber === '') ? setAutoclaveInputHasError(true) : setAutoclaveInputHasError(false);

            return;
        }

        setValidLoadsReportQuery(true);
        setLoadsReportResults(true);
        setDateInputHasError(false);
        setAutoclaveInputHasError(false);
    }

    return (
        <div className='loads-report-query'>
            <div className='loads-report-query__input'>
                <label>Select Date:</label>
                <input className={`loads-report-query__input-date ${dateInputHasError ? 'loads-report-query__has-error' : ''}`} type='date' value={selectedQueryDate} onChange={(e) => setSelectedQueryDate(e.target.value)} disabled={showLoadsReportResults}/>
            </div>
            <div className='loads-report-query__input'>
                <label>Select Autoclave:</label>
                <select className={`loads-report-query__input-select ${autoclaveInputHasError ? 'loads-report-query__has-error' : ''}`} value={selectedQueryAutoclaveNumber} onChange={(e) => setSelectedQueryAutoclaveNumber(e.target.value)} disabled={showLoadsReportResults}>
                    <option value='' disabled></option>
                    <option value='all'>All</option>
                    <option value='9'>09</option>
                    <option value='12'>12</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                </select>
            </div>
            <div className='loads-report-query__button-actions'>
                <Button label="Generate Report"
                        onClick={() => validInputCheck()}
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
