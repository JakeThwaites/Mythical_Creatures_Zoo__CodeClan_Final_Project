import React, {Component} from 'react';
import ouroboros from './ouroboros.png';

class Logo extends Component{
   render(){
      return(
         <img src={ouroboros} alt="Logo" style={{width: 100, height: 100}}/>
      )
   }
}

export default Logo;