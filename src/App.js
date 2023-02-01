import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Search from './pages/Search';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        
          <Route path="/login" element={<Login />} />
          
          <Route path="/contact" element={<Contact />} />

          <Route path="/search" element={<Search />} />

          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
