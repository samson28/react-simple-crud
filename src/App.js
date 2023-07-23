import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Layout from './components/Layout';
import NewArticle from './components/NewArticle';
import UpdateArticle from './components/UpdateArticle';
import { AppContext, useAppState } from './app/appContext';


function App() {
  return (
    <AppContext.Provider value={useAppState()}>
      <BrowserRouter>
        <Layout/>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/articles' element={<Article/>}></Route>
          <Route path='/newarticle' element={<NewArticle/>}></Route>
          <Route path='/updateArticle/:id' element={<UpdateArticle/>}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>

  );
}

export default App;
