'use client'

import { Button } from '@/components/ui/button'
import { Field, FieldLabel, FieldDescription, FieldGroup, FieldSet, FieldContent, FieldTitle,FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
function page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function signup() {
       const user = await axios.post('http://localhost:3000/api/v1/auth/login', {email, password})
       console.log(user);
    }
    
    
  return (
    <div className='relative flex flex-col flex-1 justify-center items-center'>
      {/* <h1 className="absolute top-60 left-100 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-black-200 select-none pointer-events-none">
        Fathom
      </h1> */}
      <h1 className="absolute top-60 left-100 -translate-x-1/2 -translate-y-1/2 text-[13vw] font-black text-gray-400 select-none pointer-events-none">
        Fathom
      </h1>
      <h1 className="absolute top-120 left-115 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-black-500 select-none pointer-events-none">
        Maritime
      </h1>
      <div className='relative left-100 border-4 p-5 rounded-lg w-100 border-white shadow-2xl'>
        <FieldSet className='relative z-10'>
        <FieldDescription className='text-black text-2xl font-bold'>Sign In</FieldDescription>
        <FieldDescription>Welcome to Ship Management App</FieldDescription>
        <FieldGroup>
            <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                <FieldLabel htmlFor="email">email</FieldLabel>
                <Input value={email} id="email" autoComplete="off" placeholder="John@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
            </Field>
            <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                <FieldLabel htmlFor="password">password</FieldLabel>
                <Input value={password} type='password' id="password" autoComplete="off" placeholder='**********' onChange={(e) => setPassword(e.target.value)}/>
            </Field>
        
            <div className='flex justify-center items-center w-60 ml-10 text-center'>
                <Field>
                <Button id="submit" type='submit' onClick={signup} className={"ml-6 hover:transform hover:scale-105 ease-in duration-200"}>Submit</Button>
                <div className='flex'>
                  <FieldDescription className='ml-7'>Don't have an account ? <Link href={"/signup"}>Sign Up</Link></FieldDescription>
                </div>
            </Field>
            </div>
            
        </FieldGroup>
    </FieldSet>
      </div>
    </div>
  )
}

export default page