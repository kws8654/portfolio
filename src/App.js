// import styles from './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mac from './components/mac/Mac';
import TurnTable from './components/turnTable/TurnTable';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Mac />} />
        <Route path="/turntable" exact element={<TurnTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
