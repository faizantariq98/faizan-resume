import React from 'react'

const Experience = ({data}) => {
    const {title,experiences}= data;
  return (
    <section>
        <h2 className='mb-6'>{title}</h2>
        <div className='flex flex-col'>
                {experiences.map(({role,description,current}) =>(
                    <div key={role} className='flex flex-col rounded-lg'>
                        <span className={`h-2 ${current ? "bg-green-500": "bg-gray-400"}`}/>
                        <div className=" bg-gray-50 p-6 drop-shadow-md gap-6">
                            <h3 className='text-black font-bold'>{role}</h3>
                            <p className='mt-2'>{description}</p>
                        </div>
                    </div>
                ))}
        </div>
    </section>
  )
}

export default Experience