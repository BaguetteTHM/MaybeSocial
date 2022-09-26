import React from 'react'

const ContentWrapper = () => {
  return (
    <div className='drawer-content '>
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
      <div className='h-full'>
        <div className='m-6 p-6 bg-base-300 flex flex-wrap' >
          <div className="card w-96 bg-base-200 shadow-xl m-4">
            <div>
              <div className='flex justify-between p-4'>
                <div className="avatar">
                  <div className="w-20 mask mask-squircle">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <h1>Schmoo</h1>
                  <p>Il y'a X jours</p>
                </div>
              </div>
              <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Regarde ma PHOTO !</h2>
                <p>Regarde le texte du post qui accompagne ma magnifque photo !</p>
                <div className="card-actions">
                  <button className="btn btn-outline btn-sm btn-info">J'aime</button>   
                  <button className="btn btn-outline btn-sm btn-error">J'aime pas</button>
                  <button className="btn btn-outline btn-sm btn-success">Je book</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-200 shadow-xl m-4">
            <div>
              <div className='flex justify-between p-4'>
                <div className="avatar">
                  <div className="w-20 mask mask-squircle">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <h1>Schmoo</h1>
                  <p>Il y'a X jours</p>
                </div>
              </div>
              <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Regarde ma PHOTO !</h2>
                <p>Regarde le texte du post qui accompagne ma magnifque photo !</p>
                <div className="card-actions">
                  <button className="btn btn-outline btn-sm btn-info">J'aime</button>   
                  <button className="btn btn-outline btn-sm btn-error">J'aime pas</button>
                  <button className="btn btn-outline btn-sm btn-success">Je book</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-200 shadow-xl m-4">
            <div>
              <div className='flex justify-between p-4'>
                <div className="avatar">
                  <div className="w-20 mask mask-squircle">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <h1>Schmoo</h1>
                  <p>Il y'a X jours</p>
                </div>
              </div>
              <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Regarde ma PHOTO !</h2>
                <p>Regarde le texte du post qui accompagne ma magnifque photo !</p>
                <div className="card-actions">
                  <button className="btn btn-outline btn-sm btn-info">J'aime</button>   
                  <button className="btn btn-outline btn-sm btn-error">J'aime pas</button>
                  <button className="btn btn-outline btn-sm btn-success">Je book</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-200 shadow-xl m-4">
            <div>
              <div className='flex justify-between p-4'>
                <div className="avatar">
                  <div className="w-20 mask mask-squircle">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <h1>Schmoo</h1>
                  <p>Il y'a X jours</p>
                </div>
              </div>
              <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Regarde ma PHOTO !</h2>
                <p>Regarde le texte du post qui accompagne ma magnifque photo !</p>
                <div className="card-actions">
                  <button className="btn btn-outline btn-sm btn-info">J'aime</button>   
                  <button className="btn btn-outline btn-sm btn-error">J'aime pas</button>
                  <button className="btn btn-outline btn-sm btn-success">Je book</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-200 shadow-xl m-4">
            <div>
              <div className='flex justify-between p-4'>
                <div className="avatar">
                  <div className="w-20 mask mask-squircle">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <h1>Schmoo</h1>
                  <p>Il y'a X jours</p>
                </div>
              </div>
              <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Regarde ma PHOTO !</h2>
                <p>Regarde le texte du post qui accompagne ma magnifque photo !</p>
                <div className="card-actions">
                  <button className="btn btn-outline btn-sm btn-info">J'aime</button>   
                  <button className="btn btn-outline btn-sm btn-error">J'aime pas</button>
                  <button className="btn btn-outline btn-sm btn-success">Je book</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-200 shadow-xl m-4">
            <div>
              <div className='flex justify-between p-4'>
                <div className="avatar">
                  <div className="w-20 mask mask-squircle">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <h1>Schmoo</h1>
                  <p>Il y'a X jours</p>
                </div>
              </div>
              <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Regarde ma PHOTO !</h2>
                <p>Regarde le texte du post qui accompagne ma magnifque photo !</p>
                <div className="card-actions">
                  <button className="btn btn-outline btn-sm btn-info">J'aime</button>   
                  <button className="btn btn-outline btn-sm btn-error">J'aime pas</button>
                  <button className="btn btn-outline btn-sm btn-success">Je book</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-200 shadow-xl m-4">
            <div>
              <div className='flex justify-between p-4'>
                <div className="avatar">
                  <div className="w-20 mask mask-squircle">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <h1>Schmoo</h1>
                  <p>Il y'a X jours</p>
                </div>
              </div>
              <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Regarde ma PHOTO !</h2>
                <p>Regarde le texte du post qui accompagne ma magnifque photo !</p>
                <div className="card-actions">
                  <button className="btn btn-outline btn-sm btn-info">J'aime</button>   
                  <button className="btn btn-outline btn-sm btn-error">J'aime pas</button>
                  <button className="btn btn-outline btn-sm btn-success">Je book</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-200 shadow-xl m-4">
            <div>
              <div className='flex justify-between p-4'>
                <div className="avatar">
                  <div className="w-20 mask mask-squircle">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <h1>Schmoo</h1>
                  <p>Il y'a X jours</p>
                </div>
              </div>
              <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Regarde ma PHOTO !</h2>
                <p>Regarde le texte du post qui accompagne ma magnifque photo !</p>
                <div className="card-actions">
                  <button className="btn btn-outline btn-sm btn-info">J'aime</button>   
                  <button className="btn btn-outline btn-sm btn-error">J'aime pas</button>
                  <button className="btn btn-outline btn-sm btn-success">Je book</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default ContentWrapper;