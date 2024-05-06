import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [validLength, setValidLength] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setValidLength(newPassword.length >= 8 && newPassword.length <= 20);
    setHasUpperCase(/[A-Z]/.test(newPassword));
    setHasLowerCase(/[a-z]/.test(newPassword));
    setHasNumber(/\d/.test(newPassword));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(newPassword));
  };

  return (
    <div className="container">
      <h1>Password Validator</h1>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <div className="criteria">
        <p className={validLength ? 'valid' : 'invalid'}>At least 8 characters long and not more than 20 characters</p>
        <p className={hasUpperCase ? 'valid' : 'invalid'}>At least one uppercase letter</p>
        <p className={hasLowerCase ? 'valid' : 'invalid'}>At least one lowercase letter</p>
        <p className={hasNumber ? 'valid' : 'invalid'}>At least one number</p>
        <p className={hasSpecialChar ? 'valid' : 'invalid'}>At least one special character (!@#$%^&*() etc.)</p>
      </div>
    </div>
  );
}

export default App;
