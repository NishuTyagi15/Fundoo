import './App.css';
import fundoo_logo from '../src/Assets/fundoo_logo.png';
import SignUp from './Registration/SignUp';

function App() {
  return (
    <div className="App">
        <img src={fundoo_logo} className="App_logo" alt="logo" />
        <SignUp/>
    </div>
  );
}

export default App;
