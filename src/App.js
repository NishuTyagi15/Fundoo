import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import SignUp from '../src/pages/Registration/SignUp';
import SignIn from '../src/pages/Login/SignIn';
import ResetPass from './pages/ResetPassword/ResetPass';
import ForgotEmail from '../src/pages/ForgotEmail/ForgotEmail';
import Dashboard from './pages/Dashboard/Dashboard';
import Archive from '../src/pages/Archive/Archive';
import Trash from '../src/pages/Trash/Trash';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/resetpassword" component={ResetPass} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/forgotemail" component={ForgotEmail} />
          <Route path="/home" component={Dashboard} />
          <Route path="/archive" component={Archive} />]
          <Route path="/trash" component={Trash} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
