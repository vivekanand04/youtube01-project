import React from 'react'
import  './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {

  // /video/:categoryId/:videoId   ....it is url used in app.jsx to reach to video
  const {videoId,categoryId}=useParams();//useparams is used to extract videoId and categoryId from url;


  return (
    <div>
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
      </div>
    </div>
  )
}

export default Video
