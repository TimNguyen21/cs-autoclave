import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadsReportQuery from '../../components/loads-report-query/LoadsReportQuery';
import LoadsReportSummary from '../../components/loads-report-summary/LoadsReportSummary';
import Button from '../../components/button/Button';
import PopupConfirmation from '../../components/popup-confirmation/PopupConfirmation';
import './LoadsReport.scss';

function LoadsReport() {
    const loadsData = useSelector((state) => state.autoclaveLoads.autoclaveLoads);

    const [selectedQueryDate, setSelectedQueryDate] = useState('');
    const [selectedQueryAutoclaveNumber, setSelectedQueryAutoclaveNumber] = useState('');
    const [showLoadsReportResults, setLoadsReportResults] = useState(false);
    const [validLoadsReportQuery, setValidLoadsReportQuery] = useState(true);

    const getFilteredLoads = (date, autoclaveNumber) => {
        return (autoclaveNumber === 'all') ? loadsData.filter((load) => load.date === date)
                                        : loadsData.filter((load) => load.date === date && load.autoclaveNumber.toString() === autoclaveNumber.toString());
    }

    const renderLoadsReport = () => {
        let filteredLoads = getFilteredLoads(selectedQueryDate, selectedQueryAutoclaveNumber);

        if (filteredLoads.length === 0) {
            return <div>No loads found for the selected criteria.</div>;
        }

        return <LoadsReportSummary date={selectedQueryDate}
                                   autoclaveNumber={selectedQueryAutoclaveNumber}
                                   loadsData={filteredLoads} />
    }

    return (
        <main className='loads-report'>
            <div className='loads-report__summary'>
                <div className='loads-report__summary-query'>
                    <LoadsReportQuery selectedQueryDate={selectedQueryDate}
                                      setSelectedQueryDate={setSelectedQueryDate}
                                      selectedQueryAutoclaveNumber={selectedQueryAutoclaveNumber}
                                      setSelectedQueryAutoclaveNumber={setSelectedQueryAutoclaveNumber}
                                      showLoadsReportResults={showLoadsReportResults}
                                      setLoadsReportResults={setLoadsReportResults}
                                      setValidLoadsReportQuery={setValidLoadsReportQuery} />
                </div>
                {showLoadsReportResults ? (<>
                    <div className='loads-report__summary-results loads-report__border-divider'>
                        {renderLoadsReport()}
                    </div>
                    <div className='loads-report__summary-actions'>
                        <Button label="Print Report" onClick={() => alert('Print Report')} disabled={getFilteredLoads(selectedQueryDate, selectedQueryAutoclaveNumber).length === 0}/>
                    </div>
                </>) : null}
                <PopupConfirmation message='There is an empty field in your report query. Please make sure all fields are filled out before generating a report.'
                                   onConfirm={() => setValidLoadsReportQuery(true)}
                                   confirmButtonLabel='Close'
                                   open={!validLoadsReportQuery} />
            </div>
        </main>
    )
}

export default LoadsReport;
