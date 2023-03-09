import React from 'react'
import { useId } from 'react';
import Skills from './Skills'
import { skills } from '../../data/page-data';

const Aboutme = ({data}) => {
    const {title,body} = data;
    const id = useId();

  return (
    <section>
        <h2 className='mb-6'>{title}</h2>
        {body?.map((el,i)=>(
          <p key={`${id}_${i}`} className='mb-6'>{el}</p>
        ))}
          <Skills data={skills}/>
    </section>
    
  )
}

export default Aboutme