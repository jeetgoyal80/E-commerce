import { useState } from 'react';
import './Checkout.css';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'cod', // default to Cash on Delivery
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log('Placing order with:', formData);
    alert('Order placed successfully!');
    // You can send formData to backend via Axios here
  };

  return (
    <div className="checkout__container">
      <h2>Checkout</h2>

      <div className="checkout__content">
        {/* Shipping Info */}
        <form onSubmit={handlePlaceOrder} className="checkout__form">
          <h3>Shipping Details</h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          {/* Payment Method */}
          <h3>Payment Method</h3>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={formData.paymentMethod === 'cod'}
              onChange={handleChange}
            />
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="online"
              checked={formData.paymentMethod === 'online'}
              onChange={handleChange}
            />
            Online Payment (Razorpay)
          </label>

          <button type="submit" className="checkout__submit">
            Place Order
          </button>
        </form>

        {/* Cart Summary */}
        <div className="checkout__summary">
          <h3>Order Summary</h3>
          <ul>
            <li>Product 1 - ₹499</li>
            <li>Product 2 - ₹799</li>
          </ul>
          <p><strong>Total: ₹1,298</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
