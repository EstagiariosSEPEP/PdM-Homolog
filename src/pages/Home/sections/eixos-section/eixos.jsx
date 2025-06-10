import React from 'react'
import EixosSection from '../../../../components/grid/grid_card_eixos'

export default function Eixos() {
  return (
    <div className='pt-24'>
        <div className='w-[110rem] left-12 h-1 bg-[black] absolute'></div>
        <div className='relative left-20 pt-8 w-[40rem]'>
            <h2 className='text-[color:var(--color-blue-950)] h-40 pl-8 pr-4 py-4 h2-eixos w-[40rem]'>eixos temáticos</h2>
            <div className="animated_line"></div>
        </div>
      <div className='w-full'>
        <EixosSection/>
      </div>
    </div>
  )
}