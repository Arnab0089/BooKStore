import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Showbook from './Pages/Showbook'
import Editbook from './Pages/Editbook'
import Createbook from './Pages/Createbook'
import Deletebook from './Pages/Deletebook'


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<Createbook/>}/>
      <Route path='/books/details/:id' element={<Showbook/>}/>
      <Route path='/books/edit/:id' element={<Editbook/>}/>
      <Route path='books/delete/:id' element={<Deletebook/>}/>
    </Routes>      
  )
}
