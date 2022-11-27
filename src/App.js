
import './App.css';
import { Navbar } from './component/navbar';
import {NavbarRoutes} from "./routes/routes"
function App() {
  return (
   <div className='App'>
      <Navbar/>
      <NavbarRoutes/>
   </div>
  );
}

export default App;
