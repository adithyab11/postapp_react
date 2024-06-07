import React from 'react'
import NavPost from './NavPost'

const AddPost = () => {
  return (
    <div>
        <NavPost/>
        <center><h1>ADD POST</h1></center>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6">
                    <label htmlFor="" className="form-label">User ID</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Post ID</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Title</label>
                <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                    <button className="btn btn-success">Upload Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost