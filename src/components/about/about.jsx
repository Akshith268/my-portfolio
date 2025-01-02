import React from 'react'
import { useState,useEffect } from 'react'
import './about.scss'
import {motion,useAnimation} from 'framer-motion'         



export const About = () => {
    let str="</ABOUT>";
    const [animation,setAnimation]=useState(false);
      const controls=useAnimation();

      useEffect(()=>{
         const handlescroll=()=>{
         if(window.scrollY>100&&!animation){
            setAnimation(true);
            controls.start("animate");
         }
      };
      window.addEventListener("scroll",handlescroll);
      return()=>{
         window.removeEventListener("scroll",handlescroll);
      };
      }
      ,[controls,animation]);


   const textvariants={
       initial:{
          x:-500,
          opacity:0
       },
   
       animate:{
          x:0,
          opacity:1,
          transition:{
          duration:1,
          staggerchildren:0.5
          }
       },
   }

   const headingvariant={
      initial:{
         x:-500,
         opacity:0
      },
  
      animate:{
         x:0,
         opacity:1,
         transition:{
         duration:0.7,
         staggerchildren:0.5
         }
      },
  }




  return (
    <motion.div className='about'>
       <motion.div className='heading' variants={headingvariant} initial='initial' animate={controls} >{str}</motion.div>
       <br/>
       <motion.div className='content' variants={textvariants} initial='initial' animate={controls}>
       Hello, and welcome to my portfolio! I’m currently pursuing a degree in Computer Science and Engineering at <span>CMR College Of Engineering</span>. My focus lies in backend development and Artificial Intelligence (AI). I specialize in building scalable backend systems with Node.js, Express, and MongoDB, and I have a strong interest in AI, especially in areas like image processing and machine learning.
    <br/><br/>
    I'm also an active member of the National Service Scheme, where I collaborate with peers on community projects, gaining valuable experiences in teamwork and social impact.
       </motion.div>
    </motion.div>
 )
}
