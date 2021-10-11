import './App.css';
import SignUp from '../src/Pages/Registration/SignUp';
import SignIn from '../src/Pages/Login/SignIn';
import ForgotPass from './Pages/ForgotPassword/ForgotPass';

function App() {
  return (
    <div className="App">
      <SignUp/>
      <SignIn/>
      <ForgotPass/>
    </div>
  );
}

export default App
