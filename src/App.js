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
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/resetpassword" component={ResetPass} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forgotemail" component={ForgotEmail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
