import './Button.scss';

function Button({ label, onClick, type = 'button', disabled = false }) {
    return (
        <button
            className='button'
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {label}
        </button>
    );
}

export default Button;
