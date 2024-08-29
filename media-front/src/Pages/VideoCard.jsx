import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Trash2 } from 'react-feather';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideo } from '../service/allapi';
import { v4 as uuidv4 } from 'uuid';





function VideoCard({card,handleDeleteStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    
    const uid=uuidv4()
    console.log(uid);

    const cardTime=new Date()
    console.log(cardTime);

    const{caption,url}=card
       if(uid!="",caption!="",url!="",cardTime!=""){
        const body={
          id:uid,cardname:caption,url,date:cardTime
        }
        const res=await addHistory(body)
        console.log(res);
       }
  }


  // to remove or delete a card using aapi call
  const removeItem=async(id)=>{
    // make an api call for delete
    const res=await deleteVideo(id)
    console.log(res);

    if(res.status>=200&&res.status<300){
      handleDeleteStatus(true)
    }
  }


  // define drag started
 const dragStarted=(e,id)=>{
  console.log("drag started and soul card id"+id);
  e.dataTransfer.setData("cardId",id)
 }
  return (
    <>
      <div>
{/* card */}
      <Card className='shadow'    draggable onDragStart={e=>dragStarted(e,card?.id)}>
      <Card.Img onClick={handleShow} variant="top" height={"200px"} src={card?.thumbnail} />
          <Card.Body>
             <Card.Title>
                <span>{card?.caption}</span>

                <span>
                  <Trash2 onClick={()=>removeItem(card?.id)} color="red" style={{float: "right"}} />
                </span>
             
             </Card.Title>

          </Card.Body>
       </Card>

       {/* modals */}

       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* autoplay(?autoplay=1) */}
        <iframe width={'100%'} height={"400px"} src={`${card?.url}?autoplay=1`} title="Lionel Messi - HABIBI - Albanian Remix ( Slowed ) | Skills &amp; Goals | HD 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>

       </Modal>


      </div>
    </>
  )
}

export default VideoCard