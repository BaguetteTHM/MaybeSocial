import React from 'react'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import SideBar from '../../components/SideBar/SideBar'


export default function Home() {
  return (
    <div className="bg-base-100 drawer drawer-mobile">
      <input id='drawer' className='drawer-toggle' type="checkbox"/>
      <>
      <ContentWrapper/>
      <SideBar/>
      
      
      </>
    </div>
  )
}
