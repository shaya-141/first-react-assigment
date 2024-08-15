import { defaults } from 'autoprefixer';
import React from 'react'

function Counter({children}) {
  return (
    <div className= ' w-40 h-40 text-white text-center bg-purple-500  m-auto mb-16'>
       {children}
    </div>
  )
}



export default Counter;