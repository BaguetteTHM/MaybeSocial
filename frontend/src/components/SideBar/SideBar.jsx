import React from 'react'

const SideBar = () => {
  return (
    <div className='drawer-side'>
      <label htmlFor='my-drawer' className='drawer-overlay'></label>
      <aside className='bg-base-200 w-80'>
        <div className='z-20 bg-base-200 bg-opacity-90 sticky top-0 h-16 shadow-sm flex items-center justify-center'>
        <kbd className="kbd">UN</kbd>
          +
          <kbd className="kbd">LOGO</kbd>
          +
          <kbd className="kbd">SVP</kbd>
        </div>
        <ul className='menu flex flex-col p-10 px-4'>
          <li className='hover-bordered'>
            <span> Feed</span>
          </li>
          <li>
            <span> Trends</span>
          </li>
          <li>
            <span> Mes bookmarks</span>
          </li>
          <li>
            <span> Top 3</span>
          </li>
        </ul>
      </aside>
    </div>
  )
}



export default SideBar;