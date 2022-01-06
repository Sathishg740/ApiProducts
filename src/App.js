import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import UserWithInstance from './components/UserWithInstance';
import Product from './apiProducts/Product';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
    {/* <Users /> */}
    {/* <UserWithInstance /> */}

    <Product />
    </div>
  );
}

export default App;
