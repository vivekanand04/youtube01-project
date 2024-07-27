import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
const App = () => {
  const [sidebar,setSidebar]=useState(true);
   const[sidebar2,setSidebar2]=useState(false);
  // setSidebar2={setSidebar2}
  return (
    <div>
     <Navbar setSidebar={setSidebar} setSidebar2={setSidebar2} /> {/* setSidebar without curly bracket act as a variable,but setSidebar
     inside curly braces are indicating that it is javascript expression and data which is passed as props in Navbar function(Components)
  */}
     <Routes>
     <Route path='/'element={<Home sidebar={sidebar} sidebar2={sidebar2} />}/>
     <Route path='/video/:categoryId/:videoId'element={<Video/>}/>{/*Vido component tab hi call hoga jab URL ka structure /video/:categoryId/:videoId format me hoga*/} 

     </Routes>
    </div>
  )
}

export default App
