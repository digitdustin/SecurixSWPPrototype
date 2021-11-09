import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from './components/Dashboard.js';
import Forms from './components/Forms.js';
import Header from './components/Header.js';
import Patches from './components/Patches.js';
import HowTos from './components/HowTos.js';
import TopNav from './components/TopNav';
import VerticalNav from './components/VerticalNav';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
    <BrowserRouter>
        <VerticalNav />
        <TopNav />
        <main>
          <Route path='/' exact>
            
          </Route>
          <Route path='/forms' component={Forms} exact/>
          <Route path='/patches' component={Patches} exact/>
          <Route path='/how-tos' component={HowTos} exact/>
        </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
