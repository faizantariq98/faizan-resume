import Image from "next/image"
import {Envelope,Linkedin,Medium, Twitter } from '../../icons'

const Sidebar = ({data}) => {
  const {name,role, education,contactLinks,contact_no}=data;
  return (
    <div className="bg-black flex flex-col content-between w-full sm:w-1/3 sm:fixed sm:justify-around text-white h-auto sm:h-screen">
        <div className=" text-white flex flex-col p-5 items-center">
            <Image src="/images/profile.png" alt="" priority width={200} height={200} className="rounded-full mb-2"/>
            <h1 className="mb-2 px-2 ">{name}</h1>
            <h2 className="mb-2 ">{role}</h2>
            <p className="mb-1 text-center">{education} </p>
            <div className="text-white text-center mb-3 mt-2 sm:mt-4">

                <h3 className="mb-1">CONTACT ME</h3>
                <div className="flex flex-row justify-center gap-2">
                <a className="icon-contact" href={contactLinks?.[0]}> <Envelope/> </a>
                <a className="icon-contact" href={contactLinks?.[1]}> <Twitter/> </a>
                <a className="icon-contact" href={contactLinks?.[2]}> <Linkedin/> </a>  
                </div>
                <h3>{contact_no}</h3>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar