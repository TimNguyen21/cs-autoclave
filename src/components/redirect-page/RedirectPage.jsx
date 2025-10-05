import './RedirectPage.scss';
import Button from '../button/Button';

function RedirectPage() {

    setTimeout(function() {
        window.location.href = "/cs/autoclave/";
    }, 7000);

    return (
        <main className='redirect-page'>
            <div className='redirect-page__container'>
                <h2>Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <p>You will be automatically redirected to the Home page. If you are not redirected, please click the button below.</p>
                <Button label="Home" onClick={() => window.location.href="/cs/autoclave/"} />
            </div>
        </main>
    )
}

export default RedirectPage;
