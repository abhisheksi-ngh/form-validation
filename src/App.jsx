import { useState } from 'react'
import './App.css'
import logo from './assets/image/logo.jpeg'

function App() {
  
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);  // Success message handle karne ke liye

  // Form input handle karenge
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Form submit hone par success message dikhana
  const handleSubmit = (e) => {
    e.preventDefault();  // Page reload hone se rokega
    setSuccess(true);    // Success message show hoga
    console.log(formData); // Console me data dekhne ke liye
  };

  return (
    <div className='form_wrapper'>
      {/* Logo aur heading */}
      <header className='header'>
        <img src={logo} alt='CultureLinkr Logo' className='logo' />
        <h1>CultureLinkr</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <input
            type='text'
            name='firstname'
            placeholder='First name'
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>

        <div className='form-control'>
          <input
            type='text'
            name='lastname'
            placeholder='Last name'
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>

        <div className='form-control'>
          <input
            type='email'
            name='email'
            placeholder='Email address'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='form-control'>
          <textarea
            name='message'
            placeholder='Your message'
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>

      {success && <p>Form successfully submitted!</p>}
    </div>
  );
}

export default App
