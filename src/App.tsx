import './App.css';

import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Courses from './Pages/Courses';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/courses' element={<Courses />} />
    </Routes>
  );
}
 
export default App;
