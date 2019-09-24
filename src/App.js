import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const LandingPage = () => <h1>Landing Page</h1>
const LoginPage = () => <h1>Login Page</h1>
const JoinPage = () => <h1>Join Page</h1>
const SecretPage = () => <h1>Secret Page</h1>

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login/">Login</Link>
            </li>
            <li>
              <Link to="/join/">Join</Link>
            </li>
            <li>
              <Link to="/secret/">Secret</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/join" exact component={JoinPage} />
        <Route path="/secret" exact component={SecretPage} />
      </div>
    </Router>
  );
}

export default App;
