import './App.css';
import {useState} from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.js';
import Forms from './components/Forms.js';
import Header from './components/Header.js';
import Patches from './components/Patches.js';
import HowTos from './components/HowTos.js';
import TopNav from './components/TopNav';
import Faq from './components/Faq';
import VerticalNav from './components/VerticalNav';
import './app.scss';
import BasePage from './components/BasePage';
import {RoleContext, roles} from './contexts/role-context'
import TaskModal from './components/TaskModal';
import { TaskContext } from './contexts/task-context';
import HelpModal from './components/HelpModal';
import { HelpContext } from './contexts/help-context';

function App() {
  const [role, setRole] = useState( localStorage.getItem("role") ? Number(localStorage.getItem("role")) : roles.user );
  const [task, setTask] = useState( localStorage.getItem("currentTask") ? Number(localStorage.getItem("currentTask")) : 1);
  const [times, setTimes] = useState(localStorage.getItem("times") ? localStorage.getItem("times").split(",") : []);
  const [helpOpen, setHelpIsOpen] = useState(false);
  const [requests, setRequests] = useState(localStorage.getItem("requests") ? localStorage.getItem("requests").split("|") : []);

  const setHelpOpen = (bool) => {
    setHelpIsOpen(bool);
  }

  const submitHelpRequest = (username, contact, category, time, details) => {
    const newRequests = (req) => [...req, `${username}:${contact}:${category}:${time}:${details}`];
    localStorage.setItem("requests", newRequests(requests).join("|"));
    setRequests( req => newRequests(req) );
  }

  const getHelpRequests = () => {
    console.log(requests);
    return requests.map((req, ind) => {
      let split = req.split(":", 5);
      return {
        id: ind,
        username: split[0],
        contact: split[1],
        category: split[2],
        timestamp: new Date(Number(split[3])).toString().slice(0, 24),
        details: split[4]
      }
    });
  }

  const toggleRole = () => {
    let newRole = (role) => role === roles.user ? roles.admin : roles.user;
    localStorage.setItem("role", newRole(role));
    setRole(role => newRole(role));
  }

  const changeTask = (num = -1) => {
    if(task === num || num === -1) {
      localStorage.setItem("currentTask", task+1);
      setTask(task + 1);
      localStorage.setItem("times", [...times, Date.now()].toString());
      setTimes([...times, Date.now()]);
    }
  }

  return(
    <RoleContext.Provider value={{role, toggleRole}}>
      <TaskContext.Provider value={{task, changeTask}}>
        <HelpContext.Provider value={{helpOpen, setHelpOpen, submitHelpRequest, getHelpRequests}}>
          <Content />
        </HelpContext.Provider>
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
        <HelpModal />

        <main>
          <Route path='/' component={Dashboard} exact/>
          <Route path='/forms' component={Forms} exact/>
          <Route path='/patches' component={Patches} exact/>
          <Route path='/how-tos' component={HowTos} exact/>
          <Route path='/faq' component={Faq} exact/>
        </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
