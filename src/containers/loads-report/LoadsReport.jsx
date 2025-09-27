import LoadsReportQuery from '../../components/loads-report-query/LoadsReportQuery';
import './LoadsReport.scss';

function LoadsReport() {

    return (
        <main className='loads-report'>
            <div className='loads-report__summary'>
                <div className='loads-report__summary-query'>
                    <LoadsReportQuery />
                </div>
                <div className='loads-report__summary-results'>
                    loads report results
                </div>
            </div>
        </main>
    )
}

export default LoadsReport;
