import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Clicked } from '../Components/Clicked/Clicked'
import { Home } from '../Components/Home/Home'

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/video/:id' element = {<Clicked/>} />
      </Routes>
       
    </div>
  )
}


