import React from 'react'

export default function TopBar() {
  return (
    <div className='sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 shadow-sm'>
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <button className="btn btn-outline btn-wide ml-12">Je POST !!!!</button>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>Profil</li>
            <li>Deconnexion</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}
