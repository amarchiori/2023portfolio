import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from './navigation/layout/layout';
import Home from './navigation/routes/home';

import Frontend from './components/projects/frontend';
import UX from './components/projects/ux';
import Typography from './components/projects/typography';
import Animation from './components/projects/animation';


function App() {
  return (
      <Routes path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/frontend" element={<Frontend/>}/>
        <Route path="/uxui" element={<UX/>}/>
        <Route path="/typography" element={<Typography/>}/>
        <Route path="/animation" element={<Animation/>}/>
      </Routes>
  );
}

export default App;
