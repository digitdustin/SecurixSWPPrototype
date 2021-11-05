import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard.js'
import TopNav from './components/TopNav';
import VerticalNav from './components/VerticalNav';
import { HomeIcon } from '@heroicons/react/outline'

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <VerticalNav />
      <TopNav />
    </div>
  );
}

export default App;
