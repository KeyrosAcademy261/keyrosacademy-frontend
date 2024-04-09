import React from 'react'
import './AdminRoute.scss'
import { Routes, Route } from 'react-router-dom'
import { ALayout,ADashboard, ACourse, AWebinaire, AUsers } from './index'
import NotFoundPage from '../../component/NotFoundPage'

export default function AdminRouter() {
  return (
    <Routes>
        <Route element={<ALayout/>}>
            <Route index element={<ADashboard/>}/>
            <Route path='/*' element={<NotFoundPage/>}/>
            <Route path='/dashboard' element={<ADashboard/>}/>
            <Route path='/course' element={<ACourse/>}/>
            <Route path='/webinaire' element={<AWebinaire/>}/>
            <Route path='/user/*' element={<AUsers/>}/>
        </Route>
    </Routes>
  )
}
