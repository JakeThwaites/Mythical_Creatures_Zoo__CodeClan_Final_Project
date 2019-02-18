import React, {Component} from 'react';
import twitter from './twitter.png';
import facebook from './facebook.png';
import linkedin from './linkedin.png';

class SocialMedia extends Component{
   render(){
      return(
         <>
         <img src={twitter} alt="Logo" style={{width: 40, height: 40}}/>
         <img src={facebook} alt="Logo" style={{width: 40, height: 40}}/>
         <img src={linkedin} alt="Logo" style={{width: 40, height: 40}}/>
         </>
      );
   }
}

export default SocialMedia; 