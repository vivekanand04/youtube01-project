import React ,{useState} from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
const Home = ({sidebar,sidebar2}) => {
  
  const [category,setCategory]=useState(0);
  return (
    <>
     <Sidebar sidebar={sidebar} sidebar2={sidebar2}category={category} setCategory={setCategory} /> 
     <div className={`container ${sidebar?"":'large-container'}`}>
      <Feed category={category}/>
     </div>
    </>
  )   
}

export default Home
