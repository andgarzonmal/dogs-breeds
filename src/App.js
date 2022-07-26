import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './Redux/configureStore';
import Nav from './Components/Nav/Nav';
import Main from './Components/Main/Main';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav>
          here will go the Nav
        </Nav>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
