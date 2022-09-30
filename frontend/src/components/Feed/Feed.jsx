import React from 'react'
import Post from './Post/Post';
// import TopBar from '../TopBar/TopBar'
import Form from '../Form/Form'

const Feed = () => {
  return (
    <div className='drawer-content '>
      {/* <TopBar/> */}
      <Post/>
      <Form/>
      
    </div>
    
  )
}

export default Feed;