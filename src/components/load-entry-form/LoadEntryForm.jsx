import { useState, useEffect } from 'react';
import Button from '../button/Button';
import AutoclaveAvailabilityCheck from '../autoclave-availability-check/AutoclaveAvailabilityCheck';
import AddItemInput from '../add-item-input/AddItemInput';
import PopupConfirmation from '../popup-confirmation/PopupConfirmation';
import { formatDateMMDDYYYY, currentDateYYYYMMDD } from '../../utils/dateUtils';
import { useDispatch } from 'react-redux';
import { addLoad } from '../../features/autoclave-loads/autoclaveLoadsSlice';
import './LoadEntryForm.scss';

function LoadEntryForm({ getLoadSummary, setShowPreview }) {
    let defaultItemProperties = {
        id: Date.now(),
        name: '',
        quantity: '',
    }

    const [date, setDate] = useState(currentDateYYYYMMDD);
    const [autoclaveNumber, setAutoclaveNumber] = useState('');
    const [loadNumber, setLoadNumber] = useState('');
    const [technicianId, setTechnicianId] = useState('');
    const [isAutoclaveValid, setIsAutoclaveValid] = useState(false);
    const [itemsList, setItemsList] = useState([defaultItemProperties]);
    const [showPopupConfirmation, setShowPopupConfirmation] = useState(false);
    const [showSuccessfulPopupConfirmation, setShowSuccessfulPopupConfirmation] = useState(false);

    const dispatch = useDispatch();

    const clearForm = () => {
        setDate(currentDateYYYYMMDD);
        setAutoclaveNumber('');
        setLoadNumber('');
        setTechnicianId('');
        setIsAutoclaveValid(false);
        setItemsList([defaultItemProperties]);
    };

    const addItem = () => {
        const newItem = {
            ...defaultItemProperties,
            id: Date.now(),
        };
        setItemsList(prev => [...prev, newItem]);
    };

    const createItemSummary = () => {
        return itemsList.map(item => `${item.name}${item.quantity === '' ? '' : ` (x${item.quantity})`}`).join(', ');
    };

    const createLoadId = () => {
        const addLeadingZero = (number) => {
            // Convert the number to a string
            const numberString = number.toString();

            // Use padStart to ensure a minimum length of 2, padding with '0'
            return numberString.padStart(2, '0');
        }

        return `AUT${addLeadingZero(autoclaveNumber)}-L${addLeadingZero(loadNumber)}-${formatDateMMDDYYYY(date)}`;
    }

    useEffect(() => {
        getLoadSummary(createItemSummary());
        setShowPreview(isAutoclaveValid);
    }, [itemsList, isAutoclaveValid, setShowPreview]);

    const renderItems = () => {
        return itemsList.map((item, index) => {
            return <AddItemInput
                key={item.id}
                item={item}
                updateItem={(id, updatedItem) => {
                    setItemsList(prev => prev.map(item => item.id === id ? updatedItem : item));
                }}
                removeItem={(id) => {
                    setItemsList(prev => prev.filter(item => item.id !== id));
                }}
            />;
        });
    };

    return (
        <div className='load-entry-form'>
            <div className='load-entry-form__autoclave-availability-check'>
                <AutoclaveAvailabilityCheck
                    date={date}
                    autoclaveNumber={autoclaveNumber}
                    loadNumber={loadNumber}
                    technicianId={technicianId}
                    isAutoclaveValid={isAutoclaveValid}
                    setIsAutoclaveValid={setIsAutoclaveValid}
                    setDate={setDate}
                    setAutoclaveNumber={setAutoclaveNumber}
                    setLoadNumber={setLoadNumber}
                    setTechnicianId={setTechnicianId}
                />
            </div>
            <div className={`${isAutoclaveValid ? 'load-entry-form__items-entry' : 'load-entry-form__hidden'}`}>
                <div className='load-entry-form__items-header'>
                    <span className='load-entry-form__items-header-name'>Items:</span>
                    <span className='load-entry-form__items-header-quantity'>Quantity:</span>
                    <span className='load-entry-form__items-header-remove'>Remove</span>
                </div>
                {renderItems()}
                <Button label='Add Item' onClick={addItem} />
            </div>
            <div className={`${isAutoclaveValid ? 'load-entry-form__actions' : 'load-entry-form__hidden'}`}>
                <Button label='Cancel'
                        variant='cancel'
                        onClick={clearForm} />
                <Button label='Submit Load'
                        onClick={() => {setShowPopupConfirmation(true);}} />
            </div>
            <PopupConfirmation
                message="Are you sure you want to submit the load? Autoclave load confirmation cannot be undone once submitted."
                confirmButtonLabel='Submit'
                onConfirm={() => {
                    setShowPopupConfirmation(false);
                    dispatch(
                        addLoad({
                            loadId: createLoadId(),
                            date,
                            autoclaveNumber,
                            loadNumber,
                            technicianId,
                            items: createItemSummary(),
                            technicianSignoffId: null,
                            passStatus: null,
                            notes: [],
                        }));
                    setShowSuccessfulPopupConfirmation(true);
                }}
                onCancel={() => {
                    setShowPopupConfirmation(false);
                }}
                open={showPopupConfirmation} />
            <PopupConfirmation
                message={`Autoclave load have been submitted successfully. Load ID is: ${createLoadId()}.`}
                onConfirm={() => {
                    setShowSuccessfulPopupConfirmation(false)
                    clearForm();
                }}
                confirmButtonLabel='OK'
                open={showSuccessfulPopupConfirmation}
            />
        </div>
    )
}

export default LoadEntryForm;
