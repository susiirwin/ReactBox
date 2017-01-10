import React from 'react'
import Idea from './Idea'

const IdeaList = ({ allIdeas, destroy, selectActive }) => {
  return(
    <div className='IdeaList'>
      { allIdeas.map( idea => <Idea { ...idea }
                      key={ idea.id }
                      destroy={ destroy }
                      selectActive={ selectActive } /> ) }
    </div>
  )
}

export default IdeaList;
