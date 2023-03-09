import React from 'react'
import Aboutme from './components/Aboutme';
import Experience from './components/Experience'

import { aboutMe } from '../data/page-data'
 import {professionalData} from '../data/page-data'
export default function page() {


  return (
    <div>
      <Aboutme data={aboutMe}/>
      <Experience data={professionalData} />
    </div>
  )
}
