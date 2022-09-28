import React from 'react'

export default function Post() {
  return (
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
        </div>
      </div>
  )
}
