import Button from '../../components/button/Button';
import './LoadsReportQuery.scss';

function LoadsReportQuery() {

    return (
        <div className='loads-report-query'>
            <div className='loads-report-query__input'>
                <label>Select Date:</label>
                <input className='loads-report-query__input-date' type='date' onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div className='loads-report-query__input'>
                <label>Select Autoclave:</label>
                <select className='loads-report-query__input-select' defaultValue='' onChange={(e) => console.log(e.target.value)}>
                    <option value='' disabled></option>
                    <option value='all'>All</option>
                    <option value='9'>9</option>
                    <option value='12'>12</option>
                    <option value='14'>14</option>
                    <option value='15'>15</option>
                </select>
            </div>
            <div className='loads-report-query__button-actions'>
                <Button label="Generate Report" onClick={() => console.log('run report')} />
            </div>
        </div>
    )
}

export default LoadsReportQuery;
