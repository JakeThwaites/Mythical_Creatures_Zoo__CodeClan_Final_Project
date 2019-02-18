import React, {Component} from 'react'
import Request from '../helpers/request.js';
import CreatureForm from '../components/Mains/CreatureForm.js';

class CreatureFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      enclosures: []
    }
    this.handleCreaturePost = this.handleCreaturePost.bind(this)
  }

  componentDidMount(){
    const request = new Request()
    request.get('/api/enclosures').then(data =>{
      this.setState({enclosures: data._embedded.enclosures})
    })
  }

  handleCreaturePost(creature){
    const request = new Request();
    request.post('/api/mythicalCreatures', creature).then(() => {
      window.location = '/CreatureList'
    })
  }

  handleCreatureUpdate(creature){
    const url = '/api/mythicalCreatures/' + creature.id;
    let request = new Request();
    request.put(url, creature).then(data => {
      window.location = '/CreatureList'
    })
  }

  render(){
    return (
      <CreatureForm handleCreaturePost={this.handleCreaturePost} />
    )
  }

}

export default CreatureFormContainer
