import React, { useEffect } from 'react'
import { useState } from 'react';
import { Form, ToastContainer } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { addCategory, deleteCategory, getCategory, getVideos, updateCategory } from '../service/allapi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Trash2 } from 'react-feather';



function Category() {

  //get category 1
  const[allCategory,setAllCategory]=useState([]) 
// category adding
 const[dataupload,setDataUpload]=useState({
  id:"",caption:"",allvideos:[]
 })




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  // category fn define me
  const setValue=(e)=>{
    const{name,value}=e.target

    setDataUpload({...dataupload,[name]:value})
  }
  console.log(dataupload);


  // define button onclick fn
  const addingAll=async(e)=>{
    e.preventDefault()
    // destructure
    const{id,caption}=dataupload

    if(!id||!caption){
      toast("please fill the form completely")
    }else{
      // api call
     let response=await addCategory(dataupload)
     

    //  
    if(response.status>=200&&response.status<300){
      console.log(response.data);
      
      setShow(false)
      toast.success("category uploaded successfully",{
       
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          
      }
      
    )
    getAllCategory()
  }
    else{
      toast("please add unique id")
    }



    }
  }
   // use effe 3
   useEffect(() => {
    
    getAllCategory()
   
  }, [])


  // category defining 2
  const getAllCategory=async()=>{
    const response=await getCategory()
    setAllCategory(response.data)
  }
  console.log(allCategory);

  // dlete fn defn
  const handleDeleteCategory=async(e,id)=>{
    e.preventDefault()
    // api call for delete category
  const res=await deleteCategory(id)
   console.log(res);
   getAllCategory()
  }

  // define ondargover
  const dragOver=(e)=>{
    e.preventDefault()
    console.log("dragging over the category");
  }

  // dropped fn define

  const dropped=async(e,categoryId)=>{
    console.log("category",categoryId);
    let sourceCardId=e.dataTransfer.getData("cardId")
    console.log("source card id",sourceCardId);
    const{data}= await getVideos(sourceCardId)
    console.log(data);

    let selectedCategory=allCategory.find(item=>item.id==categoryId)
    console.log("target category details",selectedCategory);
    selectedCategory.allvideos.push(data)
    console.log("updated category details",selectedCategory);
    await updateCategory(categoryId,selectedCategory)
    getAllCategory()

  }
  return (
    <>
      <div>    
            <div onClick={handleShow} className='btn btn-dark m-2 d-grid'>Add Category</div>
      </div>


{
  allCategory.map(item=>(

    <div droppable onDragOver={e=>dragOver(e)} onDrop={e=>dropped(e,item?.id)}>
    <div className="d-flex justify-content-between border rounded mt-3 p-3">

      <h4>{item?.caption}</h4>
      <span onClick={e=>handleDeleteCategory(e,item?.id)}><Trash2 color='red'/></span>

    </div>
  </div>

  ))
}




      {/* model */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <FloatingLabel className="mb-3" controlId="floatingid" label="Id">
               <Form.Control name='id' onChange={setValue} type="text" placeholder="Category id" />
            </FloatingLabel>

            <FloatingLabel className="mb-3" controlId="floatingicaption" label="Caption">
               <Form.Control name='caption' onChange={setValue} type="text" placeholder="Caption" />
            </FloatingLabel>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={addingAll} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>


      {/* toast */}
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  )
}

export default Category