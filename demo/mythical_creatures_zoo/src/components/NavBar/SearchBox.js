import React, { Component } from 'react';

class SearchBox extends Component {
   render() {
      return (
         <>
            <form className="form" id="searchForm">
               <input
                  type="text"
                  className="input"
                  id="addInput"
                  placeholder="Enter query..."
               />
               <button className="button is-info" >
          Search
        </button>
      </form>
         </>
            );
      
         }
      }
      
export default SearchBox;