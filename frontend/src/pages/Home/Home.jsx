import React from 'react'
import Feed from '../../components/Feed/Feed'
import Form from '../../components/Form/Form'
// import SideBar from '../../components/SideBar/SideBar'


export default function Home() {
  return (
    <div className="bg-base-100 drawer drawer-mobile">
      <input id='drawer' className='drawer-toggle' type="checkbox"/>
      <>
      <Feed/>
      <Form/>
      
      </>
    </div>
  )
}
