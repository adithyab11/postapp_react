import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import DeletePost from './components/DeletePost';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ViewPhoto from './components/ViewPhoto';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddPost/>}/>
    <Route path='/search' element={<SearchPost/>}/>
    <Route path='/delete' element={<DeletePost/>}/>
    <Route path='/viewall' element={<ViewPhoto/>}/>
   </Routes>
   </BrowserRouter>

  );
}

export default App;
