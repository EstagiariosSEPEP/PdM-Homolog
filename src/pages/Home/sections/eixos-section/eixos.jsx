import React from 'react'
import EixosSection from '../../../../components/grid/grid_card_eixos'

export default function Eixos() {
  return (
    <div>
        <div>
            <h2 className='text-[color:var(--color-blue-950)] h-40 text-[5rem] pl-8 pr-4 py-4'>eixos temáticos</h2>
            <div className="animated_line"></div>
        </div>
      <div className='w-full'>
        <EixosSection/>
      </div>
    </div>
  )
}
