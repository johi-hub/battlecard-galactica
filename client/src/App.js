import '../src/assets/css/App.css';
import Hero from './components/Hero';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route path="/welcome" component={ Hero }/>
        <Route path="/homepage" component={ Homepage }/>
      </Router>
    </>
  );
}

export default App;
