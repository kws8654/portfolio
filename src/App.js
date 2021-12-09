// import styles from './App.module.css'
import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LoadingSpinner from './components/UI/LoadingSpinner';
import LoadingPage from './components/lodingPage/LoadingPage';

// const LoadingPage = lazy(() => import('./components/lodingPage/LoadingPage'));
const Mac = lazy(() => import('./components/mac/Mac'));
const Portfolio1 = lazy(() => import('./components/portfolios/Portfolio1'));
const Portfolio2 = lazy(() => import('./components/portfolios/Portfolio2'));
const Portfolio3 = lazy(() => import('./components/portfolios/Portfolio3'));
const Portfolio4 = lazy(() => import('./components/portfolios/Portfolio4'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route exact path='/'>
            <LoadingPage />
          </Route>
          <Route path='/main'>
            <Mac />
          </Route>
          <Route path='/portfolio1'>
            <Portfolio1 />
          </Route>
          <Route path='/portfolio2'>
            <Portfolio2 />
          </Route>
          <Route path='/portfolio3'>
            <Portfolio3 />
          </Route>
          <Route path='/portfolio4'>
            <Portfolio4 />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
