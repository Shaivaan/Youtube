import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addData } from '../../Redux/Action';
import "./Card.css";
export const Card = ({title,channel,thumb,vId,des}) => {
  const dispatch = useDispatch();
  let obj = {
    title,
    channel,
    des
  }
  const num = Math.round(Math.random()*100);
  const data = useSelector((store)=>{return store.data});
  const navigate = useNavigate();
  const next = (x)=>{
    localStorage.setItem("obj",JSON.stringify(obj));
    dispatch(addData(obj));
    navigate(`/video/${x}`);
    return;
  }

  return (
    <div id = "card" onClick={()=>{next(vId)}}>
      <div>
          <img src={thumb} height={"75%"} width= {"100%"}/>
      </div>

      <div id = "nfo">

        <div  id = "leff">
           <img src={`https://picsum.photos/200/300?random=${num}`}  className='imgroll' />
        </div>

        <div id = "riff">

    <div className='title'>{title}</div>
    
    <div className='chann'>{channel}</div>

        </div>
      </div>


    </div>
  )
}


