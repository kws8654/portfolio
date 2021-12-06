// import styles from './App.module.css'
import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import LoadingPage from './components/lodingPage/LoadingPage';
// import Mac from './components/mac/Mac';
// import Portfolio1 from './components/portfolios/Portfolio1';

const LoadingPage = lazy(() => import('./components/lodingPage/LoadingPage'));
const Mac = lazy(() => import('./components/mac/Mac'));
const Portfolio1 = lazy(() => import('./components/portfolios/Portfolio1'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
            <Portfolio1 />
          </Route>
          <Route path='/portfolio3'>
            <Portfolio1 />
          </Route>
          <Route path='/portfolio4'>
            <Portfolio1 />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
