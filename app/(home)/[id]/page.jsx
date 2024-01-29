import React from 'react'
import Invoice from './_components/Invoice'
import DeleteModale from './_components/DeleteModale'

export default function Inv({ params }) {

  const { id } = params

  return (
    <div className='w-full'>
      <Invoice id={id} />
    </div>
  )
}
