import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Large from './Components/Dogsize/Large';
import Medium from './Components/Dogsize/Medium';
import Small from './Components/Dogsize/Small';
import Dog from './Components/Dog/Dog';

function App() {
  const dogs = useSelector((state) => state.dogs);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Large" element={<Large />} />
        <Route path="/Medium" element={<Medium />} />
        <Route path="/Small" element={<Small />} />
        <Route path="/dog/:id" element={<Dog dogs={dogs} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
