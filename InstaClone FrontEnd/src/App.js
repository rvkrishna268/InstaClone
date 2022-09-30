import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import PostView from './components/PostView/PostView';
import PostCard from './components/PostCard/PostCard';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/PostView' element={<PostView/>}/>
          <Route path='/PostCard' element={<PostCard/>}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
