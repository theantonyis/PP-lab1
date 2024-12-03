import React, { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
    const [form, setForm] = useState({ name: '', description: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(form);
        setForm({ name: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
