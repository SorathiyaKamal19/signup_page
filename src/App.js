import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import {Routes,Route} from "react-router-dom"
import Signup from './components/Signup';
import Signupnew from './components/Signupnew';
import Pagenotfound from './components/Pagenotfound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='' element={<LoginPage/>}  />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signupnew' element={<Signupnew/>} />
        <Route path='*' element={<Pagenotfound/>}  />


      </Routes>
    
    </div>
  );
}

export default App;
