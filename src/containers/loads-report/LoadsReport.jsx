import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadsReportQuery from '../../components/loads-report-query/LoadsReportQuery';
import LoadsReportSummary from '../../components/loads-report-summary/LoadsReportSummary';
import Button from '../../components/button/Button';
import './LoadsReport.scss';

function LoadsReport() {
    const loadsData = useSelector((state) => state.autoclaveLoads.autoclaveLoads);

    const [selectedQueryDate, setSelectedQueryDate] = useState('');
    const [selectedQueryAutoclaveNumber, setSelectedQueryAutoclaveNumber] = useState('');
    const [showLoadsReportResults, setLoadsReportResults] = useState(false);

    const renderLoadsReport = (date, autoclaveNumber) => {
        let filteredLoads = loadsData;

        if (autoclaveNumber === 'all') {
            filteredLoads = loadsData.filter((load) => load.date === date);
        } else {
            filteredLoads = loadsData.filter((load) => load.date === date && load.autoclaveNumber.toString() === autoclaveNumber.toString());
        }

        if (filteredLoads.length === 0) {
            return <div>No loads found for the selected criteria.</div>;
        }

        return <LoadsReportSummary date={date}
                                   autoclaveNumber={autoclaveNumber}
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
                                      setLoadsReportResults={setLoadsReportResults} />
                </div>
                {showLoadsReportResults ? (<>
                    <div className='loads-report__summary-results loads-report__border-divider'>
                        {renderLoadsReport(selectedQueryDate, selectedQueryAutoclaveNumber)}
                    </div>
                    <div className='loads-report__summary-actions'>
                        <Button label="Print Report" onClick={() => alert('Print Report')} />
                    </div>
                </>) : null}
            </div>
        </main>
    )
}

export default LoadsReport;
