import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Home } from './Components/Home/Home';
import Right from './Components/Right/Right';
import { Routers } from './Routers/Routers';

function App() {
  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
