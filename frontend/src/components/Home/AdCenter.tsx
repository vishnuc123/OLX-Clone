import React from 'react'

type style ={
  w:string,
  h:string,
  m?:string
}

const AdCenter = ({w,h,m}:style) => {
  return (
   <div className={`${w} ${h} flex justify-center ${m ?? ''}`}>

      <div className='bg-slate-50 w-[80vw] flex justify-center'>
        <img src="	https://tpc.googlesyndication.com/simgad/9811458195747220859" alt="" className='object-contain' />
      </div>
    </div>
  )
}

export default AdCenter
