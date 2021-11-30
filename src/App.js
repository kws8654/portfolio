// import styles from './App.module.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingPage from './components/lodingPage/LoadingPage';
import Mac from './components/mac/Mac';
import Portfolio1 from './components/portfolios/Portfolio1';
import TurnTable from './components/turnTable/TurnTable';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LoadingPage />
        </Route>
        <Route exact path='/main'>
          <Mac />
        </Route>
        <Route path='/portfolio1'>
          <Portfolio1 />
        </Route>
        <Route path='/portfolio2'>
          <TurnTable />
        </Route>
        <Route path='/portfolio3'>
          <TurnTable />
        </Route>
        <Route path='/portfolio4'>
          <TurnTable />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
