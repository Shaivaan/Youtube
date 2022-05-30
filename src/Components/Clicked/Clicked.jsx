import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Sidecard } from '../Sidecard.jsx/Sidecard';
import "./Clicked.css";
export const Clicked = () => {

    const [dis,setDis] = useState(true);
    const [data,setData] = useState([]);
    const {id} = useParams();
    const title = useSelector((store)=>{return store.data.title});
    const channel = useSelector((store)=>{return store.data.channel});
    const des = useSelector((store)=>{return store.data.des});

  useEffect(()=>{
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&regionCode=IN&key=AIzaSyCCf-686sTvzKVZV8vXIoLS0knyftJP6BA").then((res)=>{
      res.json().then((res)=>{
      
        setData(res.items);
      })
    })
  },[])

  return (
    <div id = "clll">
      <Navbar/>
      <div id = "inC">
      <div id  ="inL">
          <iframe  src={`https://www.youtube.com/embed/${id}`}>
          </iframe>

          <br /><br />
          <div style={{color:"white"}}>{title}</div>  
<br />
          <div id = "cenn">
             <span className = "thumbb" ><img src="https://picsum.photos/200/300?random=1" /></span>
             <span>{channel}</span>
          </div>
          <br />
         <div id = "des">{dis ? des : "" }</div> 
         <br />
         <div id = "showm" onClick={()=>{
           setDis(!dis)
         }}>{dis?"SHOW LESS" : "SHOW MORE"} </div> 
      </div>
      <div id  ="inR">
          {data.map((el,i)=>{
              return <Sidecard key = {i} title={el.snippet.title} 
              channelName= {el.snippet.channelTitle}
              img= {el.snippet.thumbnails.high.url}
              vId= {el.id}
              des = {el.snippet.localized.description}
              />
          })}
          
      </div>
      </div>
    </div>
  )
}


// <iframe width="790" height="444" src="https://www.youtube.com/embed/_eupjpMKEwY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>