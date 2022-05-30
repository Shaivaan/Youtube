import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addData } from '../../Redux/Action';
import "./Sidecard.css";
export const Sidecard = ({title,channelName,img,vId,des}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let obj = { 
    title:title,
    channel:channelName,
    des
  }
  const next = (x)=>{
    localStorage.setItem("obj",JSON.stringify(obj));
    dispatch(addData(obj));
    navigate(`/video/${x}`)
    return;
  }


  return (
    <div id = "sidecard" onClick={()=>{next(vId)}}>
      <div className='sideL'>
        <img src={img} width={"100%"} height= {"100%"} />
      </div>
      <div className='sideR'>
        <div className='titt'>{title}</div>
        
        <div className='chhhh'>{channelName}</div>
      </div>
    </div>
  )
}

