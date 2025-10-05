import { useState } from 'react';
import './HomePage.scss';

function HomePage() {
    const [isLoadEntryOpen, setIsLoadEntryOpen] = useState(false);
    const [isActiveLoadsOpen, setIsActiveLoadsOpen] = useState(false);
    const [isLoadsReportOpen, setIsLoadsReportOpen] = useState(false);
    const [isLoadSearchOpen, setIsLoadSearchOpen] = useState(false);

    const toggleLoadEntrySection = (documentSection) => {
        if (documentSection === 'load-entry') {
            setIsLoadEntryOpen(!isLoadEntryOpen);
        } else if (documentSection === 'active-loads') {
            setIsActiveLoadsOpen(!isActiveLoadsOpen);
        } else if (documentSection === 'loads-report') {
            setIsLoadsReportOpen(!isLoadsReportOpen);
        } else if (documentSection === 'load-search') {
            setIsLoadSearchOpen(!isLoadSearchOpen);
        }
    };

    return (
        <div className='home-page'>
            <h2> Welcome to Central Services Autoclave!</h2>
                <p>This application is designed to help manage autoclave loads efficiently and effectively.
                    Use the navigation menu to access different features such as load entry, active loads, load reports, and search.
                </p>
            <div className='home-page__divider'></div>
            <div className='home-page__documentation-content'>
            <h2><u>Documentations / User Manual</u></h2>
                {/* Load Entry Section */}
                <h3>Load Entry <button id='load-entry' className='home-page__toggle-button' onClick={(e) => toggleLoadEntrySection(e.target.id)}>{isLoadEntryOpen ? 'Close' : 'Open'}</button></h3>
                <section className='home-page__toggle-section' style={{ display: isLoadEntryOpen ? 'block' : 'none' }}>
                    <p>* Instructions on how to enter a new load into the system *</p>
                    <img src="/load-entry-check.png" alt="Load Entry Check Form Image" />
                    <ul>
                        <li><b>Required Fields: </b>Autoclave Number, Load Number, Technician ID, Date</li>
                        <li>Error will appear if load details are not entered upon load availability check</li>
                        {/* <li>This form will check the availability of the autoclave and display a message if it is not available</li> // TODO: Add this feature in the future*/}
                        <li>Once autoclave availability is confirmed, autoclave item entry form will open</li>
                    </ul>
                    <img src="/load-entry-items.png" alt="Load Entry Items Form Image" />
                    <ul>
                        <li>User will input item name and quantity</li>
                        <li>Users are able to add multiple items in one input with comma separating the items</li>
                        <li>If multiple items are added in one input, then the quantity input will be disabled</li>
                        <li>Once items entry is complete, the load entry confirmation form will open</li>
                    </ul>
                    <img src="/load-entry-confirmation.png" alt="Load Entry Confirmation Form Image" />
                    <ul>
                        <li>Review the entered information and confirm the load details</li>
                        <li>Once confirmed, the load will be submitted and processed</li>
                        <li>The confirmation of a successful load submission will be displayed with <b>Load ID</b> for reference</li>
                        <li><b>Load ID</b> will need to be documented in the Autoclave QC envelope and signed by the technician</li>
                    </ul>
                    <div className='home-page__divider'></div>
                </section>

                {/* Active Loads Section */}
                <h3>Active Loads<button id='active-loads' className='home-page__toggle-button' onClick={(e) => toggleLoadEntrySection(e.target.id)}>{isActiveLoadsOpen ? 'Close' : 'Open'}</button></h3>
                <section className='home-page__toggle-section' style={{ display: isActiveLoadsOpen ? 'block' : 'none' }}>
                        <p>* Instructions on how to confirm and manage active loads *</p>
                        <img src="/active-loads.png" alt="Active Loads Form Image" />
                        <ul>
                            <li>Click on a Active Load link to access desired load</li>
                            <li>Load summary will display once a active load is selected</li>
                            <li>Technician will confirm the load details and pass/fail status</li>
                            <li>If load failed or status is N/A, technician will need to provide notes on why the load failed or N/A</li>
                            <li>Technician will sign off the load with their Technician ID</li>
                            <li>Confirmation popup will display allowing the user to confirm the load status</li>
                            <li>Once confirmed, the load will be updated and removed from the active loads list</li>
                            <li>Load status cannot be changed once confirmed</li>

                        </ul>
                    <div className='home-page__divider'></div>
                </section>

                {/* Loads Report Section */}
                <h3>Loads Report<button id='loads-report' className='home-page__toggle-button' onClick={(e) => toggleLoadEntrySection(e.target.id)}>{isLoadsReportOpen ? 'Close' : 'Open'}</button></h3>
                <section className='home-page__toggle-section' style={{ display: isLoadsReportOpen ? 'block' : 'none' }}>
                    <p>* Instructions on how to generate a report of all loads *</p>
                    <img src="/load-report.png" alt="Loads Report Form Image" />
                    <ul>
                        <li>Select the date and autoclave number (or all autoclaves) to generate the report</li>
                        <li>Click on "Generate Report" button to view the loads summary for the selected date and autoclave</li>
                        <li>The report will display all loads with their details including Load ID, Load Number, Technician ID, Pass Status, Technician Signoff ID, Item Summary, and Notes</li>
                        <li>If no loads are found for the selected date and autoclave, a message will be displayed indicating that no loads were found</li>
                        <li>User can print the report based on user preference</li>
                    </ul>
                <div className='home-page__divider'></div>
                </section>

                {/* Load Search Section */}
                <h3>Search<button id='load-search' className='home-page__toggle-button' onClick={(e) => toggleLoadEntrySection(e.target.id)}>{isLoadSearchOpen ? 'Close' : 'Open'}</button></h3>
                <section className='home-page__toggle-section' style={{ display: isLoadSearchOpen ? 'block' : 'none' }}>
                    <p>* Instructions on how to search for specific load *</p>
                    <img src="/load-search.png" alt="Load Search Form Image" />
                    <ul>
                        <li>Enter search criteria by Load ID</li>
                        <li>Click on "Search" button to view the search results</li>
                        <li>If no result is found, a message will be displayed indicating that no loads were found</li>
                        <li>A successful search results will display load information with option to add notes to the load</li>
                        <li>When adding a note to the load, a confirmation popup will display allowing the user to confirm the note</li>
                        <li>Once a note is submitted, it cannot be changed and will be documented in the load summary</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}   

export default HomePage;
