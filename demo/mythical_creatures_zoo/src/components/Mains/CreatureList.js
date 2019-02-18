import React, { Component, Fragment } from 'react';
import CreatureDetail from './CreatureDetail.js';
import './Main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddCreature from './AddCreature.js';
import RegionsDropDown from '../NavBar/RegionsDropDown.js'
import { Link } from 'react-router-dom';

const CreatureList = ({onRegionSelected, creatures = [] }) => {

   const listCreatures = creatures.map((creature, index) => {
      return (
          <div key={index} className="creature_list">
            <CreatureDetail
               name={creature.name}
               breed={creature.breed}
               description={creature.description}
            >
            </CreatureDetail>
         </div>
      );
   });

   return (
      <Fragment>
     <div className="creaturelistoptions">
      <Link to="/AddCreature">Add New Creature</Link>
      <br></br>
      <RegionsDropDown onRegionSelected={onRegionSelected} creatures={creatures} />
      </div>
      <ul className="list">
         {listCreatures}
      </ul>
    
    </Fragment>
   );

}




   export default CreatureList;
