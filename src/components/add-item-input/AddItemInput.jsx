import { useState, useEffect } from 'react';
import './AddItemInput.scss';

function AddItemInput({ item, updateItem, removeItem }) {

    const [itemNameHasComma, setItemNameHasComma] = useState(false);

    const onItemNameChange = (e) => {
        setItemNameHasComma(e.target.value.includes(','));
        updateItem(item.id, { ...item, name: e.target.value });
    }

    useEffect(() => {
        if (itemNameHasComma) {
            updateItem(item.id, { ...item, quantity: '' });
        }
    }, [itemNameHasComma]);

    return (
        <div className='add-item-input'>
            <input
                className='add-item-input__name'
                type='text'
                value={item.name}
                onChange={onItemNameChange}
            />
            <input
                className='add-item-input__quantity'
                type='number'
                min='1'
                value={item.quantity}
                onChange={(e) => updateItem(item.id, { ...item, quantity: e.target.value })}
                disabled={itemNameHasComma}
            />
            <div className='add-item-input__remove-container'>
                <button className='add-item-input__remove' onClick={() => removeItem(item.id)} tabIndex={-1}>x</button>
            </div>
        </div>
    );
}

export default AddItemInput;
