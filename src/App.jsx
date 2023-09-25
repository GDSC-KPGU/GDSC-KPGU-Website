import React from 'react'
import { Route , Routes } from 'react-router-dom'
import HomePage from './page/HomePage'

export default function App() {
  return (
    <div className='flex justify-center items-center bg-gray-900 h-screen w-screen'>
     <HomePage />
    </div>
  )
}
