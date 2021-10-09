import './App.css';
import fundoo_logo from '../src/Assets/fundoo_logo.png';
import SignUp from './Registration/SignUp';
import account from '../src/Assets/account.svg';

function App() {
  return (
    <div className="App">
        <img src={fundoo_logo} className="App_logo" alt="logo" />
        <SignUp/>
        <img src={account} className='account_logo' alt="acc_logo" />
    </div>
  );
}

export default App;
