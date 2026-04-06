import commonAPI from "./commonAPI"
import BASEURL from "./baseUrl"

//add RESUME API
 export const addResumeAPI=(resume)=>{
   return commonAPI("POST",`${BASEURL}/resume`,resume)
}

//EDITRESUME API
export const editResumeAPI=(resumeid,resume)=>{
  return commonAPI("PUT",`${BASEURL}/resume/${resumeid}`,resume)
}

//getsingleresume
export const getResumeAPI=(resumeid)=>{
  return commonAPI("GET",`${BASEURL}/resume/${resumeid}`,{})
}



//HISTORY API

export const addHistoryAPI=(resume)=>{
  console.log(resume);
  
  return commonAPI("POST",`${BASEURL}/history`,resume)
}



// ADDHISTORY API



// GETHISTORYAPI
export const getHistoryAPI=()=>{
  return commonAPI("GET",`${BASEURL}/history`,{})

}


//DELETE HISTORY API

export const deleteHistoryAPI=(resumeId)=>{
  return commonAPI("DELETE",`${BASEURL}/history/${resumeId}`,{})

}