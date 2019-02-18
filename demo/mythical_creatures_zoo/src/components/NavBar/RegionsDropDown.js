import React, { Component } from 'react';
import './NavBar.css';
import _ from 'lodash';

const RegionsDropDown = ({ onRegionSelected, creatures = [] }) => {

  let getUniqueRegions = [];

  const getRegions = creatures.map((creature) => {
    return creature.originLocation;
  })

  getUniqueRegions = _.uniqBy(getRegions, (region) => {
    return region;
  })


  const options = getUniqueRegions.map((region, index) => {
    return <option value={region} key={index}>{region}</option>
  })

  function handleChange(event) {
    onRegionSelected(event.target.value);
  }

  return (
    <select id="region-selector" onChange={handleChange} defaultValue="default">
      <option value="default">All Regions</option>
      <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="British Isles">British Isles</option>
          <option value="Eastern Mediterranean">Eastern Mediterranean</option>
          <option value="Northern Europe">Northern Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Oceania">Oceania</option>
    </select>
  )
}

export default RegionsDropDown;
