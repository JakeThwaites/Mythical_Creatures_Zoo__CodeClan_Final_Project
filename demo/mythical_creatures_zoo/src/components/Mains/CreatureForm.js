import React, { Component, Fragment } from 'react';

const CreatureForm = (props) => {

  function handleSubmit(event) {
    event.preventDefault()

    const creature = {
      "name": event.target.name.value,
      "gender": event.target.gender.value,
      "killBehaviour": event.target.killBehaviour.value,
      "originLocation": event.target.regionSelector.value,
      "description": event.target.description.value,
      "breed": event.target.breed.value
    }
    props.handleCreaturePost(creature)
  }

  return (
    <Fragment>
      <h2>Add New Creature</h2>
      <form onSubmit={handleSubmit} className="creature-form">
        <div className="form-item">
          <label>Name</label>
          <input type="text" id="name" name="name" />

          <br></br>
          <br></br>

          <label>Breed</label>
          <input type="text" id="breed" name="breed" />

          <br></br>
          <br></br>


          <label>Gender</label>
          <div className="gender_input">
            <input type="radio" value="male" name="gender" /> Male <br />
            <input type="radio" value="female" name="gender" /> Female <br />
            <input type="radio" value="Non Binary" name="gender" /> Non Binary <br />
          </div>
        </div>

        <br></br>
          <br></br>

        <div className="form-item">
          <label for="killBehaviour">Does it kill humans?</label>
          <select name="killBehaviour">
            <option value="IKillEat">Yes, it eats humans!</option>
            <option value="IDontKill">No way, Jose!</option>
          </select>

          <br></br>
          <br></br>

          <label>Origin Location</label>
          <select id="regionSelector" defaultValue="default">
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

          <br></br>
          <br></br>

          <label>Description</label>
          <textarea name="description" for="add-creature-form" placeholder="Enter Description here..." rows="4" cols="50"></textarea>
        </div>


        <div className="form-item">
          <input type="submit" value="Submit New Creature" />
        </div>

      </form>
    </Fragment>
  )
}

export default CreatureForm;
