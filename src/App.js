import './App.css';
import SignUp from '../src/Pages/Registration/SignUp';
import SignIn from '../src/Pages/Login/SignIn';
import ForgotPass from './Pages/ForgotPassword/ForgotPass';
import ForgotEmail from './Pages/ForgotEmail/ForgotEmail';

function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      {/* <SignIn/> */}
      {/* <ForgotPass/> */}
      <ForgotEmail/>
    </div>
  );
}

export default App
