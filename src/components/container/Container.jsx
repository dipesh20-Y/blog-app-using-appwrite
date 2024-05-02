import React from 'react'


function Container({children}) {
  return (
    <div className='w-full mx-auto p-4'>
      {children}
    </div>
  )
}

export default Container
