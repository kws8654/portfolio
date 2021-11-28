// import styles from './App.module.css'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Mac from './components/mac/Mac';
import TurnTable from './components/turnTable/TurnTable';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Mac />
        </Route>
        <Route path="/portfolio1">
          <TurnTable />
        </Route>
        <Route path="/portfolio2">
          <TurnTable />
        </Route>
        <Route path="/portfolio3">
          <TurnTable />
        </Route>
        <Route path="/portfolio4">
          <TurnTable />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
