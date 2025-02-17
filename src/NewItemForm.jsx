import { useState } from 'react';
import PropTypes from 'prop-types';

const NewItemForm = ({ addItem }) => {
  const INITIAL_STATE = {
    name: '',
    qty: '',
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('Event Target:', e);
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="qty">Quantity: {formData.qty}</label>
      <input
        id="qty"
        type="range"
        min="1"
        max="10"
        name="qty"
        value={formData.qty}
        onChange={handleChange}
      />

      <button>Add Item</button>
    </form>
  );
};

NewItemForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default NewItemForm;
