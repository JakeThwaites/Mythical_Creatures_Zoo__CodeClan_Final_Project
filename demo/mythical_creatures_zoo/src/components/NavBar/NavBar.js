import React, { Component, Fragment } from 'react';
import Logo from './Logo.js';
import ExploreButton from './ExploreButton.js'
import SearchBox from './SearchBox.js';
import { Link } from 'react-router-dom';
import CreatureList from '../Mains/CreatureList.js';


const NavBar = ({ onRegionSelected, creatures = [] }) => {
   return (
      <div className="navbar">

         <div className="navchild">
            <Link to="/">
               <Logo />
            </Link>
         </div>

         <div className="navchild">
            <Link to="/Explore" style={{ textDecoration: 'none' }} className="navlink">
               <ExploreButton />
            </Link>
         </div>

         <div className="navchild">
            <Link to="/CreatureList" style={{ textDecoration: 'none' }} className="navlink">
               CreatureList
               </Link>
         </div>

         <div className="navchild" >
            <Link to="/Search" style={{ textDecoration: 'none' }} className="navlink">
               <SearchBox />
            </Link>
         </div >
      </div>
   )
}


export default NavBar;
