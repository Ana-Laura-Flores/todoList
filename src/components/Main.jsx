import React from 'react'
import Modify from './Modify.jsx'
import Filter from './Filter.jsx'
import Add from './Add.jsx'

export default function Main() {
  return (
    <div className="mt-3 w-full">
        <div className='flex w-11/12 flex-col md:flex-row'>
            <Modify />
            <Filter/>
        </div>
            <Add />
    </div>
  )
}
