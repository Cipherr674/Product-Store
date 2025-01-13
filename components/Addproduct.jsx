import React, { useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';

const Addproduct = () => {
  const [form, setForm] = useState({
    title: '',
    image: '',
    price: '',
    rating: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};

    if (!form.title.trim()) tempErrors.title = '*Product Name is required.';
    if (!form.image.trim()) tempErrors.image = '*Image URL is required.';
    if (!form.price || form.price <= 0) tempErrors.price = '*Price must be a positive number.';
    if (!form.rating || form.rating <= 0 || form.rating > 5)
      tempErrors.rating = '*Rating must be a number between 1 and 5.';

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0; 
  };

  const capValue = () => {
    if (validateForm()) {
      console.log(form);
      axios.post('https://fakestoreapi.com/products', form).then((res) => {
        console.log(res);
        alert('Product added successfully!');
      }).catch((err) => {
        console.error(err);
        alert('Failed to add product.');
      });
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <div className="register-container">
          <div className="register-form">
            <h3 className="register-title">Add Product</h3>

            <div className="form-field mb-2">
              <label className="input-label required">Product Name</label>
              <input
                type="text"
                className="input-field"
                required
                value={form.title}
                onChange={(e) => {
                  setForm({ ...form, title: e.target.value });
                }}
              />
              {errors.title && <span className="error-text text-danger">{errors.title}</span>}
            </div>

            <div className="form-field mb-2">
              <label className="input-label required">Image</label>
              <input
                type="text"
                className="input-field"
                required
                value={form.image}
                onChange={(e) => {
                  setForm({ ...form, image: e.target.value });
                }}
              />
              {errors.image && <span className="error-text text-danger">{errors.image}</span>}
            </div>

            <div className="form-field mb-2">
              <label className="input-label required ">Price</label>
              <input
                type="number"
                className="input-field"
                required
                value={form.price}
                onChange={(e) => {
                  setForm({ ...form, price: e.target.value });
                }}
              />
              {errors.price && <span className="error-text text-danger">{errors.price}</span>}
            </div>

            <div className="form-field mb-2">
              <label className="input-label required">Rating</label>
              <input
                type="number"
                className="input-field"
                required
                value={form.rating}
                onChange={(e) => {
                  setForm({ ...form, rating: e.target.value });
                }}
              />
              {errors.rating && <span className="error-text text-danger">{errors.rating}</span>}
            </div>

            <button type="button" className="register-button" onClick={capValue}>
              Add Product
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Addproduct;
