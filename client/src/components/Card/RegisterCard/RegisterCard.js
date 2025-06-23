import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterCard.css';

const RegisterCard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(`https://e-commerce-33ek.onrender.com/api/user/register`, formData, {
        timeout: 5000,
      });

      if (response.data.success) {
        alert('Account created successfully!');
        navigate('/account/login'); // redirect to login page
      } else {
        alert(response.data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      const message = err?.response?.data?.message || "Something went wrong!";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register__card__container">
      <div className="register__card">
        <div className="register__header">
          <h1>Create Account</h1>
        </div>

        <form onSubmit={handleSubmit} className="register__inputs">
          <div className="fname__input__container reg__input__container">
            <label className="fname__label input__label">First name</label>
            <input
              type="text"
              name="firstName"
              className="fname__input register__input"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="lname__input__container reg__input__container">
            <label className="lname__label input__label">Last name</label>
            <input
              type="text"
              name="lastName"
              className="lname__input register__input"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="email__input__container reg__input__container">
            <label className="email__label input__label">Email</label>
            <input
              type="email"
              name="email"
              className="email__input register__input"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="password__input__container reg__input__container">
            <label className="password__label input__label">Password</label>
            <input
              type="password"
              name="password"
              className="password__input register__input"
              placeholder="********"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="register__button__container">
            <button type="submit" className="register__button" disabled={loading}>
              {loading ? 'Creating...' : 'Create Account'}
            </button>
          </div>
        </form>

        <div className="register__other__actions">
          <div className="register__login__account">
            Already have an account? <Link to="/account/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
