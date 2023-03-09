"use client"
import React from 'react'
import { useState } from 'react'

const Skills = ({data}) => {
    const [activeTab,setActiveTab]=useState('soft')

    const setBg=(active)=>activeTab === active ? 'bg-yellow-500' : 'bg-grey';

    const setALign=(active)=>active === 'Soft' ? 'text-left' : 'text-right';

    const tabs =  <div className='flex '>
                {['soft','hard'].map((el)=>(
                <button  key ={el} type='button' className={`btn ${setBg(el)} ${setALign(el)} hover:text-white hover:bg-black`} onClick={()=>setActiveTab(el)}> {el} Skills </button>
                ))}
                </div>;
    
    const content = <ul className={`flex flex-row flex-wrap list-none      gap-2 py-4 ${activeTab=== 'soft' ? 'justify-start' : 'justify-end'}`}>
    {
        data[activeTab].map(({icon,text})=>(
            <li key={text} className="skill">
                <span>{icon}</span>
                {text}
            </li>
        ))
    }
   </ul>
  return (
        <div>
            {tabs}
            {content}
        </div>
  )
}

export default Skills