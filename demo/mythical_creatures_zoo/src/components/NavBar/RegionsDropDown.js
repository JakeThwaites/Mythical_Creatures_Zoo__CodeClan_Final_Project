import React, { Component } from 'react';

const RegionsDropDown = (props, { creatures = [] }) => {
  const options = creatures.map((creature, index) => {
    return <option value={index} key={index}>{creature.origin_location}</option>
  })

  function handleChange(event) {
    props.onRegionSelected(event.target.value);
  }

  return (
    <select id="region-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a Region...</option>
      {options}
    </select>
  )
}

export default RegionsDropDown;