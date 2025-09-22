import './PopupConfirmation.scss';
import Button from '../button/Button';

function PopupConfirmation({ 
    message,
    confirmButtonLabel = 'Confirm',
    onConfirm = null,
    cancelButtonLabel = 'Cancel',
    onCancel = null,
    open
}) {

    if (!open) return null;

    return (
        <div className='popup-confirmation'>
            <div className='popup-confirmation__message'>{message}</div>
            <div className='popup-confirmation__actions'>
                {onCancel ? <Button label={cancelButtonLabel} onClick={onCancel} variant='cancel' /> : null}
                {onConfirm ? <Button label={confirmButtonLabel} onClick={onConfirm} /> : null}
            </div>
        </div>
    );
}

export default PopupConfirmation;
