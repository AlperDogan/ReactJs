import React from 'react'
import {useParams} from 'react-router-dom'

function Detail() {

  const {pid,cid} =useParams()
  console.log(pid,cid)

  return (
    <div>Detail</div>
  )
}

export default Detail