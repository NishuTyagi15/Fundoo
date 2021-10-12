import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import SignUp from '../src/pages/Registration/SignUp';
import SignIn from '../src/pages/Login/SignIn';
import ResetPass from './pages/ResetPassword/ResetPass';
import ForgotEmail from '../src/pages/ForgotEmail/ForgotEmail';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={SignIn} />
      </Router>
      <Router>
        <Route exact path="/resetpassword" component={ResetPass} />
      </Router>
      <Router>
        <Route path="/signup" component={SignUp} />
      </Router>
      <Router>
        <Route path="/forgotemail" component={ForgotEmail} />
      </Router>
    </div>
  );
}

export default App
