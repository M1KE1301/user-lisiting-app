import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components'
import UserList from './pages/List/UserList'
import UserDetails from './pages/SingleUser/UserDetails'
import PageNotFound from './pages/Error/PageNotFound'
import Home from './pages/Landing/Home'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='list' element={<UserList/>}/>
        <Route path='userdetail/:id' element={<UserDetails/>}/>
        <Route index element={<Home/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default App