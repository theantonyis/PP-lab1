import React, { useEffect, useState } from 'react';
import { fetchItems, addItem } from '../services/api';
import ItemList from '../components/ItemList';
import AddItemForm from '../components/AddItemForm';

const ItemsPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadItems = async () => {
            try {
                const { data } = await fetchItems();
                setItems(data);
            } catch (error) {
                alert('Error loading items.');
            }
        };
        loadItems();
    }, []);

    const handleAddItem = async (item) => {
        try {
            const { data } = await addItem(item);
            setItems([...items, data]);
        } catch (error) {
            alert('Error adding item.');
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <ItemList items={items} />
            <AddItemForm onAdd={handleAddItem} />
        </div>
    );
};

export default ItemsPage;
