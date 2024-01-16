import React from 'react'

export default function layout({ children }) {
  return (
    <div className='h-screen '>
        <div className='flex justify-center py-14'>
        {children}
        </div> 
    </div>
  )
}
