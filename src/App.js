// src/App.js
import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');

  const handleAddItem = async () => {
    try {
      const response = await fetch('/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemName, price }),
      });
      if (response.ok) {
        console.log('Item added successfully!');
        // Handle success (e.g., update state or show a message)
      } else {
        console.error('Error adding item');
        // Handle error (e.g., show an error message)
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div className="App">
      <Dashboard/>
      <h1>Bed Manufacturing Company</h1>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  
  );
}

export default App;