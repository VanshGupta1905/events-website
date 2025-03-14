'use client'
import React, { useRef ,useState} from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams, usePathname, useParams } from 'next/navigation'

export const SingleEvent = ({data}) => {

    const inputEmail = useRef()
    const pathname = usePathname()
    const params = useParams()
    const [message,setMessage]=useState()
    const addDetails = async(e) => {
        e.preventDefault(); 
        const emailValue = inputEmail.current.value
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (!emailValue || !emailRegex.test(emailValue)) {
            setMessage('Incorrect Email')
            return
        }
        inputEmail.current.value=''
        const eventID = params?.eventID
        const id = params?.id
        
        try {
          // Post Fetch Request
          //Body emailValue and the eventID
          const response=await fetch('/api/email-registration',{
            method:'post',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({email:emailValue,eventId:eventID,id:id})
          })

          if (!response.ok) {
            throw new Error(`Error :${response.json}`)
            }
          const data=await response.json()
          setMessage(data.message)
          
          
        } catch (error) {
          console.log('Error',error);
          
        }
       
    }
    return (
      <div className='single-card'>
        <h1>{data.title}</h1>
        <div className="image">
          <Image
            src={data.image} 
            alt={data.title}
            width={1000}
            height={600}
          />
        </div>

        <p>{data.description}</p>
        <br/>
        <br/>
        <form className='email_registration' onSubmit={addDetails}>
          <label className='title'>Get Registered for this event : </label>
          <input ref={inputEmail} type="email" id="email" placeholder="Your email address " />
          <button type='submit'>Submit</button>
        </form>
        <div className='message'>{message}</div>

      </div>
    )
}

export default SingleEvent;
