import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import {  getVideo } from '../service/allapi'





function View({serverRes}) {

  const[allVideos,setAllVideos]=useState([])


  const[deleteStatus,setDeleteStatus]=useState(false)

  // useEffect:-is ahook
  useEffect(() => {
    
    getAllVedios()
   
    
  }, [serverRes,deleteStatus])

  const handleDeleteStatus=(res)=>{
    setDeleteStatus(res)
  }


  
  


  // define a fn for api call
  const getAllVedios=async()=>{
    
    // api call
    const response=await getVideo()
    // console.log(response.data);
    setAllVideos(response.data)
  }
  console.log(allVideos);




  return (
   <> 
         <div className='border p-3 rounded m-4'>

                <Row>

                    {

                      allVideos.map(video=>(

                                        
                      <Col sm={12} md={6} >

                        <VideoCard card={video} handleDeleteStatus={handleDeleteStatus} />

                      </Col>

                      ))
                    
                    }

                </Row>


         </div>
   </>
  )
}

export default View