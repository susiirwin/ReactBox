import React from 'react'
const ActiveIdea = ({idea, updateIdea}) => {

  // if there is an active idea, render title and body input fields
  if (!idea) {
    return <p className='ActivateIdeaStatement'>Please Select an Idea</p>
  }

  return (
    <div>
      <p>
        <input className='ActiveIdea-title' name='title' value={ idea.title } onChange={ (event) => updateIdea(event, idea.id) } />
      </p>
      <p>
        <textarea className='ActiveIdea-body' name='body' value={ idea.body } onChange={ (event) => updateIdea(event, idea.id) } />
      </p>
    </div>
  )
}

export default ActiveIdea
