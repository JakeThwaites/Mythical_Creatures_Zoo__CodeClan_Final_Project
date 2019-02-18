import React, { Component } from 'react';


class UsefulLinksMain extends Component {
   render() {
      return (
         <div className="container">
            <div className="usefullinks">
               <p><a href="https://en.wikipedia.org/wiki/List_of_Greek_mythological_creatures" target="_blank">Wikipedia: Greek Monsters</a></p>
               <p><a href="https://en.wikipedia.org/wiki/Category:Creatures_in_Norse_mythology" target="_blank">Wikipedia: Norse Monsters</a></p>
               <p><a href="https://www.edinburghzoo.org.uk/" target="_blank">Edinburgh Zoo</a></p>
               <p><a href="https://www.amazon.co.uk/Mythos-Greek-Retold-Stephen-Fry-ebook/dp/B071CN6W7T/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=" target="_blank">Stephen Fry's Mythos: ebook on Amazon.co.uk</a></p>
               
               <p><a href="http://www.bbc.co.uk/wales/history/sites/themes/myths.shtml" target="_blank">BBC: Welsh Myths and Legends</a></p>
            </div>
         </div>
      )
   }
}


export default UsefulLinksMain;