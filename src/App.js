import './App.css';
import {useState} from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import {Modal} from 'carbon-components-react'
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
import { TaskContext } from './contexts/task-context';

function App() {
  const [role, setRole] = useState( Number(localStorage.getItem("role")) );
  const [task, setTask] = useState(0);
  const [times, setTimes] = useState([]);

  const toggleRole = () => {
    localStorage.setItem("role", role === roles.user ? roles.admin : roles.user );
    setRole(role => (role === roles.user ? roles.admin : roles.user));
  }

  const changeTask = (num) => {
    if(task === num) {
      localStorage.set("currentTask", task+1);
      setTask(task + 1);
      localStorage.set("times", [...times, Date.now()]);
      setTimes([...times, Date.now()]);
    }
  }

  return(
    <RoleContext.Provider value={{role, toggleRole}}>
      <TaskContext.Provider value={{task, changeTask}}>
        <Content />
      </TaskContext.Provider>
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
