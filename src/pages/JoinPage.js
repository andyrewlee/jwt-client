import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const JoinPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const data = { email, password };

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((res) => {
      return res.json();
    }).then((res) => {
      if (res.success) {
        history.push('/login');
      }
    });
  };

  return (
    <div>
      <h1>Join</h1>
      <input onChange={handleEmailChange} type="text" placeholder="email" />
      <input onChange={handlePasswordChange} type="password" placeholder="password" />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default withRouter(JoinPage);
