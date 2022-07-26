import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './Redux/configureStore';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';
import Large from './Components/Dogsize/Large';
import Medium from './Components/Dogsize/Medium';
import Small from './Components/Dogsize/Small';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav>
          here will go the Nav
        </Nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Large" element={<Large />} />
          <Route path="Medium" element={<Medium />} />
          <Route path="Small" element={<Small />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
