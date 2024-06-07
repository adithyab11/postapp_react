import React from 'react'
import NavPost from './NavPost'

const DeletePost = () => {
  return (
    <div>
        <NavPost/>
         <h1><center>DELETE A BOOK</center></h1>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12">
                    <label htmlFor="" className="form-label">Post ID</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <button className="btn btn-success">Delete</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default DeletePost