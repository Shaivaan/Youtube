import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card';
import "./Content.css";
export const Content = () => {


  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&regionCode=IN&key=AIzaSyCCf-686sTvzKVZV8vXIoLS0knyftJP6BA").then((res)=>{
      res.json().then((res)=>{
      
        setData(res.items);
      })
    })
  },[])
  return (
    <div id = "setC">

    {data.map((el,i)=>{
      return <Card key={i}  title={el.snippet.title} channel= {el.snippet.channelTitle} 
      thumb= {el.snippet.thumbnails.high.url} vId= {el.id}
      des = {el.snippet.localized.description}
      />
      
    })}

    </div>
  )
}


