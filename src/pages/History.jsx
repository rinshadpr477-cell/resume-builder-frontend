import React, { useEffect, useState } from 'react'
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI'

import { FaTrash } from 'react-icons/fa'
import { Paper } from '@mui/material'





function History() {
  
  const [history, setHistory] = useState([])
  useEffect( () => {
    getHistory()
  }, [])

  const getHistory = async () => {
    const result= await getHistoryAPI()
    console.log(result);
    if(result.status>=200&&result.status<300){
      setHistory(result.data)
    }
    
  }

  const removeHistory= async (resumeId)=> {
    try{

      const result = await deleteHistoryAPI(resumeId)
     getHistory()
      

    }
    catch(err){
      console.log(err);
      
    }
  }
  return (
    <div className='row m-5'>
      {
        history?.length > 0 ?
        history.map(resume=>(

      <div className='col-md-4' key={resume.id}>
        <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
          <div className='d-flex align-items-center justify-content-between'>
            <h6>Review At : {resume.timestamp}</h6>
            <button onClick={()=>removeHistory(resume.id)} className='btn text-danger'><FaTrash /></button>

          </div>
          <div >
            <img src={resume.imgURL} alt=""  className='w-100'/>
          </div>
        </Paper>

      </div>
      ))
      :
      <div className='text-danger fw-bold '>
       NO RESUME GENERATED YET
      </div>
}
    </div>
  )
}

export default History
