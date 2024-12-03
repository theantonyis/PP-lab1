import React from 'react';

const ItemList = ({ items }) => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item._id}>
                    <strong>{item.name}</strong>: {item.description}
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
