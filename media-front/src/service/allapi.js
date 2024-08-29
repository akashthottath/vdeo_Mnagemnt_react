import { BASE_URL } from './baseurl'
import { commonRequest } from './commonrequest'


// all videos
    //  function definition for add video
export const addVideo=async(body)=>{
    return  await  commonRequest("POST",`${BASE_URL}/videos`,body)  // its a api call  /so async fn aaki maata ennit error n await kodthu
    
}

// get video
//  function definition for get video from back end

export const getVideo=async()=>{
    return  await   commonRequest("GET",`${BASE_URL}/videos`,"")   
    // common request fn call  and method use 
}

// delete video
export const deleteVideo=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})
}



// add category
export const addCategory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/category`,body)
}

// to get category
export const getCategory=async()=>{
    return  await   commonRequest("GET",`${BASE_URL}/category`,"")   
}
// to delete category
export const deleteCategory=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/category/${id}`,{})
}

// watch history section

// get watch history
      export const getHistory=async()=>{
      return await  commonRequest("GET",`${BASE_URL}/watchhistory`,"")
         }

// add history
export const addHistory=async(body)=>{
    return await  commonRequest("POST",`${BASE_URL}/watchhistory`,body)
     }


    //  to get a specific vdo data from resource

    export const getVideos=async(id)=>{
        return  await   commonRequest("GET",`${BASE_URL}/videos/${id}`,"")   
         
    }

    // to update video details in category
    export const updateCategory=async(id,body)=>{
        return  await   commonRequest("PUT",`${BASE_URL}/category/${id}`,body)       
    }
