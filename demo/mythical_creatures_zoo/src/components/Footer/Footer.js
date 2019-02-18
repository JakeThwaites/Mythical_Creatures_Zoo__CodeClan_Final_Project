import React, { Component, Fragment } from 'react';
import SocialMedia from './SocialMedia.js'
import FAQ from './FAQ.js'
import OurHistory from './OurHistory.js'
import UsefulLinks from './UsefulLinks.js'
import { Link } from 'react-router-dom';

class Footer extends Component {
   render() {
      return (
        
         <div className="footer">

            <div className="footerchild">
                  <SocialMedia />
            </div>

            <div className="footerchild">
               <Link to="/FAQ" style={{ textDecoration: 'none' }} >
                  FAQ
               </Link>
            </div>

            <div className="footerchild">
               <Link to="/OurHistory" style={{ textDecoration: 'none' }}>
                  Our History
               </Link>
            </div>

            <div className="footerchild">
               <Link to="/UsefulLinks" style={{ textDecoration: 'none' }}>
                  Useful Links
               </Link>
            </div>

         </div>
      );
   }
}

export default Footer;
