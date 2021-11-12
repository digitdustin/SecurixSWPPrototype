import './App.css';
import {useState} from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from './components/Dashboard.js';
import Forms from './components/Forms.js';
import Header from './components/Header.js';
import Patches from './components/Patches.js';
import HowTos from './components/HowTos.js';
import TopNav from './components/TopNav';
import VerticalNav from './components/VerticalNav';
import './app.scss';
import BasePage from './components/BasePage';
import {RoleContext, roles} from './contexts/role-context'
import TaskModal from './components/TaskModal';

function App() {
  const [role, setRole] = useState(roles.user);

  const toggleRole = () => {
    setRole(role => (role === roles.user ? roles.admin : roles.user));
  }

  return(
    <RoleContext.Provider value={{role, toggleRole}}>
      <Content />
    </RoleContext.Provider>
  )
}

function Content() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '#efefef'}}>
    <BrowserRouter>
        <TopNav />
        <TaskModal />
        
        <main>
          <Route path='/' exact>
            <BasePage />  
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
