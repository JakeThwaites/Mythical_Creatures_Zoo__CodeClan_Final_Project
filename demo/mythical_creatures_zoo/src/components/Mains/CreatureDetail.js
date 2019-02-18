import React, { Component } from 'react';

const CreatureDetail = (creature) => (

   <div className="creature">
      <p>Name: {creature.name}</p>
      <p>Breed: {creature.breed}</p>
      <p>Description: </p>
      <p>{creature.description}</p>
   </div>
)

export default CreatureDetail;
