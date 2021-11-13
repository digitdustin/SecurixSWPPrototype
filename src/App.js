import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.js';
import Forms from './components/Forms.js';
import Header from './components/Header.js';
import Patches from './components/Patches.js';
import HowTos from './components/HowTos.js';
import TopNav from './components/TopNav';
import VerticalNav from './components/VerticalNav';
import { Button } from 'carbon-components-react';
import './app.scss';
import BasePage from './components/BasePage';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#efefef'}}>
    <BrowserRouter>
        <TopNav />
        <main>
          <Route path='/' component={Dashboard} exac/>
          <Route path='/forms' component={Forms} exact/>
          <Route path='/patches' component={Patches} exact/>
          <Route path='/how-tos' component={HowTos} exact/>
        </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
