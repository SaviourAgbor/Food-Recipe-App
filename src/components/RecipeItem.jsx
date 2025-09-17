import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeItem({item}) {
  return (
    <div className=' rounded-2xl  shadow-lg shadow-red-200/50    hover:shadow-lg hover:shadow-red-300 duration-300 flex flex-col w-full md:w-65  lg:w-70 overflow-hidden p-2 bg-white/75 gap-5 bord border-white'>
      <div className='h-40  w-full overflow-hidden flex justify-center items-center rounded-2xl'>
        <img src={item.image_url} alt={item.title} className='block w-full object-cover h-full'/>
      </div>
      <div>
        <p className='text-cyan-700 text-sm font-medium'>{item.publisher}</p>
        <h2 className='text-2xl font-bold text-black truncate'>{item.title}</h2>
        <Link to={`/recipe-item/${item.id}`} className='cursor-pointer text-sm p-3 mt-4 px-8 rounded-lg uppercase font-medium bg-black text-white tracking-wider inline-block shadow-lg hover:scale-102 transition-all duration-300'>Recipe Details</Link>
      </div>
    </div>
  )
}
