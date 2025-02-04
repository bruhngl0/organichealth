import React from 'react';
import '../styles/screenvideo.scss'
import Header from './Header';


const ScreenVideo = () => {
  return (
    <>    
    <Header />
    <div className="video-container-screen">
      <video autoPlay loop muted className="video-bg-screen">
        <source src="/life.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-text-screen">
        
      </div>
      <div className="overlay-text-screen-one">
       ORGANIC HEALTH
      </div>
    </div>
    </>

  );
};

export default ScreenVideo;
