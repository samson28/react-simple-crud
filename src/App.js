import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Layout from './components/Layout';


function App() {
  return (
   <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/articles' element={<Article/>}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
