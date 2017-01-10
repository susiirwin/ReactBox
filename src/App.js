import React from 'react';
import CreateIdeaForm from './components/CreateIdeaForm'
import IdeaList from './IdeaList'
import ActiveIdea from './ActiveIdea'

class App extends React.Component {
  constructor(){
    super()
    this.state = { ideas: [] } //this will create an empty collection to store those new ideas as they are submitted, an array of Idea Objects
  }

  componentDidMount(){
    const ideas = JSON.parse(localStorage.getItem('ideas'))

    this.setState({ ideas: ideas ? ideas : [] })
  }

  storeIdea(idea){
    this.state.ideas.push( idea )

    let ideas = this.state.ideas

    this.setState( { ideas: ideas }, localStorage.setItem('ideas', JSON.stringify(ideas)) )
  }

  destroyIdea(id){
    let ideas = this.state.ideas.filter( idea => idea.id !== id)
    this.setState({ ideas: ideas }, localStorage.setItem('ideas', JSON.stringify(ideas)) )
  }

  updateIdea(event, id){
    const fieldName = event.target.name
    const fieldValue = event.target.value

    let ideas = this.state.ideas.map( idea => {
      if (idea.id !== id) return idea;
      return Object.assign(idea, { [fieldName]: fieldValue })
    })
    this.setState({ ideas: ideas }, localStorage.setItem('ideas', JSON.stringify(ideas)) )
  }

  selectActive(id){
    let ideas = this.state.ideas.map( idea => {
      return Object.assign(idea, {active: id === idea.id ? !idea.active : false})
    })

    this.setState({ ideas: ideas }, localStorage.setItem('ideas', JSON.stringify(ideas)) )
  }

  render() {

    const activeIdea = this.state.ideas.find( idea => idea.active)
    return (
      <div>
        <CreateIdeaForm saveIdea={ this.storeIdea.bind(this) }  />

        <IdeaList allIdeas={ this.state.ideas }
                  destroy={ this.destroyIdea.bind(this) }
                  selectActive={ this.selectActive.bind(this) } />

        <div>
          <ActiveIdea idea={ activeIdea }
                      updateIdea={ this.updateIdea.bind(this) }/>
        </div>

      </div>
    );
  }
}


export default App;
