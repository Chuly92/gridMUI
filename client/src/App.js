import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FormNewMovement } from './components/FormNewMovement';
import { GridOperations } from './components/GridOperations';
import { MainPage } from './components/MainPage';
import { NavBar } from './components/NavBar';

function App() {

  return (

    <div>
      <NavBar/>
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainPage />}> </Route>
          <Route path="/newMovement" element={<FormNewMovement />}> </Route>
          <Route path="/listMovements" element={<GridOperations />}> </Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
};

export default App;

