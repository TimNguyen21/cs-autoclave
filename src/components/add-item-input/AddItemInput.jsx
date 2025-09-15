import './AddItemInput.scss';

function AddItemInput({ item, updateItem, removeItem }) {
    return (
        <div className='add-item-input'>
            <input
                className='add-item-input__name'
                type='text'
                value={item.name}
                onChange={(e) => updateItem(item.id, { ...item, name: e.target.value })}
            />
            <input
                className='add-item-input__quantity'
                type='number'
                min='1'
                value={item.quantity}
                onChange={(e) => updateItem(item.id, { ...item, quantity: e.target.value })}
            />
            <button className='add-item-input__remove' onClick={() => removeItem(item.id)} tabIndex={-1}>x</button>
        </div>
    );
}

export default AddItemInput;
