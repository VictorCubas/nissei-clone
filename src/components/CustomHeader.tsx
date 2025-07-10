import nisseiLogo from '@/assets/nissei-logo.jpg';
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import {
  ShoppingCart,
} from "lucide-react"
import { useState } from 'react';



const CustomHeader = () => {
  const [onMouseOver, setMouseOver] = useState(false);
  let cssClassName = `w-10 h-10 cursor-pointer hover:text-amber-500`;

  if(onMouseOver){
    cssClassName += ' text-amber-500';
  }
  else{
    cssClassName += ' text-gray-600';
  }

  return (
    <header className='bg-white flex w-full mt-6 h-26 px-16'>
      <div className='w-2/5 flex items-center'>
        <img className='w-full object-cover' src={nisseiLogo} alt="Nissei Logo" />
      </div>

      <div className='flex items-center gap-x-1 w-full px-10 mx-8'>
        <input className='w-full h-12 px-3 border  border-gray-300 rounded-lg p-3 focus:outline focus:outline-gray-500' type="search" name='searcch' id="search" placeholder='Buscar en todo la tienda' />
        <button className='h-12 font-medium px-8 bg-amber-400 text-xl cursor-pointer'
            title='Buscar artículo'>Buscar</button>
      </div>

      <div className='flex items-center gap-x-6 ml-3 w-2/5'>

        <CiHeart className='w-12 h-12 cursor-pointer hover:text-amber-500'/>


        <div className="relative">
          <ShoppingCart className={cssClassName} />
          <span className='absolute -bottom-1 -right-2 bg-amber-500 text-gray-800 
            text-xs rounded-full w-5 h-5 flex items-center justify-center cursor-pointer'
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}>
            0
          </span>
        </div>



        <div className="flex items-center gap-x-4 space-x-1 cursor-pointer">
          <CiUser className="w-11 h-11 hover:text-amber-500" />
          <div className="text-normal">
            <div className="text-gray-800 hover:text-amber-400 text-xl">Iniciar sesión</div>
            <div className="text-gray-500 text-md hover:text-amber-400">Registrarme</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default CustomHeader