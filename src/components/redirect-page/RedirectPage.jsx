import './RedirectPage.scss';
import Button from '../button/Button';

function RedirectPage() {

    return (
        <main className='redirect-page'>
            <div className='redirect-page__container'>
                <h2>Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <p>Please click the button below. You will be redirected to the Load Entry page.</p>
                <Button label="Load Entry" onClick={() => window.location.href="/cs/autoclave/load-entry"} />
            </div>
        </main>
    )
}

export default RedirectPage;
