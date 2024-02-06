import './App.css'
import { Route, Routes } from "react-router-dom";
import Layout from './navigation/layout/layout';
import Home from './navigation/routes/home';
import Frontend from './components/projects/frontend';
import UX from './components/projects/ux';
import Typography from './components/projects/typography';
import Animation from './components/projects/animation';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/amarchiori.matomo.cloud/container_tHfymbbc.js'; s.parentNode.insertBefore(g,s);
   }, [])


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
