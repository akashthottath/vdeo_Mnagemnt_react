import React, { useEffect, useState } from 'react'
import { getHistory } from '../service/allapi'


function Watchhistory() {
// getapi 3
const[history,setHistory]=useState()
  // get 2
  useEffect(() => {
    getWatchHistory()
  }, [])
  

// get api call 1
const getWatchHistory=async()=>{
 const {data}= await getHistory()
 setHistory(data)
}
console.log(history);

  return (
   <>
      <h1>Watchhistory</h1>

      <table className='table shadow m-3 border rounded'>

        <thead>
          <tr>
            <th>ID</th>
            <th>CARD NAME</th>
            <th>URL</th>
            <th>DATA</th>
          </tr>
        </thead>

        <tbody>

          {/* get api 4 */}

          {
            history?.map((item,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{item?.cardname}</td>
              <td>{item?.url}</td>
              <td>{item?.date}</td>
            </tr>
            ))
          }
          
        </tbody>

      </table>
   </>
  )
}

export default Watchhistory