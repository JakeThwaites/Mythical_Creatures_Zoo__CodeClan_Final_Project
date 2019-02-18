import React, { Component, Fragment } from 'react';
import CreatureDetail from './CreatureDetail.js';
import './Main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddCreature from './AddCreature.js';
import { Link } from 'react-router-dom';

const EnclosureList = ({ creatures = [] }) => {

   const listCreatures = creatures.map((creature, index) => {
      return (
          <li key={index} className="creature_list">
            <CreatureDetail
               name={creature.name}
               breed={creature.breed}
               description={creature.description}
            >
            </CreatureDetail>
         </li>
      );
   });

   return (
     <Fragment>
      <Link to="/AddCreature">Add New Creature</Link>
      <ul>
         {listCreatures}
      </ul>
    </Fragment>
   );

}



// import React, {Component} from 'react';
// import Enclosure from './Enclosure.js';
//
// const EnclosureList = ({creaturesByEnclosure = []})=> {
//    const listEnclosures = creaturesByEnclosure.map((enclosure, index) => {
//       return (
//          <li key={index} className="enclosure">
//             <Enclosure
//                enclosure={enclosure}
//             >
//             </Enclosure>
//          </li>
//       );
//    });
//
//    return (
//       <ul>
//          {listEnclosures}
//       </ul>
//    );
// }
//
export default EnclosureList;
