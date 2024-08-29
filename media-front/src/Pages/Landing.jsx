import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {
// function definition
// redirect from one page to another page we can use useNavihgate hook
const navigate=useNavigate()

const handleNavigate=()=>{
      navigate('/home')
}

  return (
    <div>
        <Row className='align-items-center'>

            <Col></Col>
            <Col lg={6}>
                <h1>WELCOME TO VIDEOOO.COM</h1>

                <p style={{textAlign:'justify'}}>where user can use their favourite videoos,user can upload any Youtube videoos by copy and paste their url in to videooos.com will alow to add and remove their uploaded videos and also arrange them in different catgories by drag and drop it is free try it now!!</p>

                <button onClick={handleNavigate} className='btn btn-success'>Click Here To Know More</button>
            </Col>

            <Col lg={5}>
                <img src="https://www.techsmith.com/blog/wp-content/uploads/2019/04/why-video-is-important.jpg" alt="no img" className="img-fluid" width={'350px'} height={'350px'} />
            </Col>

        </Row>
    </div>
  )
}

export default Landing