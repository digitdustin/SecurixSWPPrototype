import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Dashboard from './components/Dashboard.js';
import Forms from './components/Forms.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
        <main>
          <Route path='/' component={Dashboard} exact/>
          <Route path='/forms' component={Forms} exact/>
        </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
