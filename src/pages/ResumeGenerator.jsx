import React from 'react'
import { IoMdDocument } from "react-icons/io";
import { IoIosDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

function ResumeGenerator() {
  return (
    <div className='container-fluid' >
        <h2 className='text-center' style={{marginTop:'80px'}}>Create a job-winning Resume in minutes</h2>
      <div className="row my-5" style={{height:'80vh'}}>
        <div className="col-md-6">
            <div className='border rounded shadow m-5 d-flex align-items-center justify-content-center flex-column' style={{height:'250px'}}>
                <IoMdDocument  className='text-primary fs-1 mb-5 '/>
                <h4>Add Your Information</h4>
                <p>Add Pre-Written example to Each Section</p>
                <h5>Step 1</h5>

            </div>
        </div>
        <div className="col-md-6">
            <div className='border rounded shadow m-5 d-flex align-items-center justify-content-center flex-column' style={{height:'250px'}}>
                <IoIosDownload  className='text-danger fs-1 mb-5 '/>
                <h4>Download Your Resume</h4>
                <p>Download and start applying</p>
                <h5>Step 2</h5>

            </div>
        </div>
        

      </div>
      <div className='text-center mb-5'>
        <Link  to={'/form'}>
      <button className='btn btn-dark text-light text-center'>
        MAKE YOUR RESUME
      </button>
      </Link>
      </div>
    
    </div>
  )
}

export default ResumeGenerator
