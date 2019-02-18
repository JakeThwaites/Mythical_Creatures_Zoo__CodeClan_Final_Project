import React, { Component } from 'react';
import CreatureDetail from './CreatureDetail.js';
import EnclosureList from './EnclosureList.js';

const Enclosure = (enclosure) => {
    console.log(enclosure);
   const listCreaturesInEnclosure = enclosure.map((creature, index) => {
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

   const presentEnclosure = (enclosure) => (
      <>
         <h4>Enclosure Number: {enclosure[0].enclosure}</h4>
         {listCreaturesInEnclosure}
      </>
   );


   return (
      <ul>
         {presentEnclosure(enclosure)}
      </ul>
   );
}


export default Enclosure;
