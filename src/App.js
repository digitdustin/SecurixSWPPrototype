import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from './components/Dashboard.js';
import Forms from './components/Forms.js';
import Header from './components/Header.js';
import Patches from './components/Patches.js';
import HowTos from './components/HowTos.js';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <BrowserRouter>
        <Header />
          <main>
            <Route path='/' component={Dashboard} exact/>
            <Route path='/forms' component={Forms} exact/>
            <Route path='/patches' component={Patches} exact/>
            <Route path='/how-tos' component={HowTos} exact/>
          </main>
      </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
