import React from 'react';

const FaceTimeVideo = () => {
  return (
    <video
      src='./image/facetime.mov'
      width='300px'
      heigth='200px'
      autoPlay
      muted
      loop
      style={{ position: 'absolute', right: '50px' }}
    />
  );
};

export default FaceTimeVideo;
