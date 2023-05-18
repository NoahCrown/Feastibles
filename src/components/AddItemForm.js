import React, { useState, useContext } from 'react';
import { MyContext } from '../ContextProvider';

const AddItemForm = () => {
    const {menuItems, setMenuItems} = useContext(MyContext)
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [src, setSrc] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: menuItems.length + 1, // Assign a unique ID to the new item
      name,
      ingredients,
      desc,
      price: parseInt(price),
      src,
    };

    setMenuItems(prev => [...prev, newItem])
    // You can store the updatedProducts array in local storage or use it in your component state
    // Clear the form inputs
    setName('');
    setIngredients('');
    setDesc('');
    setPrice('');
    setSrc('');
  };

  return (
    <form onSubmit={handleFormSubmit} className='add-item-forms'>
        <h1>Add a new product:</h1>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="ingredients">Ingredients:</label>
      <textarea id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />

      <label htmlFor="desc">Description:</label>
      <textarea id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} required />

      <label htmlFor="price">Price:</label>
      <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

      <label htmlFor="src">Image URL:</label>
      <input type="text" id="src" value={src} onChange={(e) => setSrc(e.target.value)} required />

      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
