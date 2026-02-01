import React from 'react';

const TableRow = (props) => {

    const totalPrice = (props.price * props.count).toFixed(2);

    return (
        <tr>
            <td>{props.name}</td>
            <td>₪{props.price}</td>
            <td>
                <input 
                    type="number" 
                    className="count-input" 
                    value={props.count} 
                    min="1"
                    onChange={(e) => {
                        const val = parseInt(e.target.value);
                        props.onCountChange(val > 0 ? val : 1);
                    }}
                />
            </td>
            <td>₪{totalPrice}</td>
            <td>
                <button onClick={props.onDelete} className="del-btn">Delete</button>
            </td>
        </tr>
    );
};

export default TableRow;