import React from 'react';
import {CircularProgress} from "material-ui";

const CircleLoader = () => {
  return (
    <CircularProgress
      style={
        {position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}
      }
      size={150} thickness={10}/>
  )
};

export default CircleLoader;