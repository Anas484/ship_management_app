'use client'

import { Button } from '@/components/ui/button'
import { Field, FieldLabel, FieldDescription, FieldGroup, FieldSet, FieldContent, FieldTitle,FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Select, SelectGroup, SelectItem, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/select'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
function page() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Crew");
    console.log(role);
    async function signup() {
       const user = await axios.post('http://localhost:3000/api/v1/auth/signup', {email, firstName, lastName, password, role})
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
        <FieldDescription className='text-black text-2xl font-bold'>Sign Up</FieldDescription>
        <FieldDescription>Welcome to Ship Management App</FieldDescription>
        <FieldGroup>
            <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                <FieldLabel htmlFor="first">First Name</FieldLabel>
                <Input value={firstName} id="firstName" autoComplete="off" placeholder="John" onChange={(e) => setFirstName(e.target.value)} />
            </Field>
            <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                <FieldLabel htmlFor="last">Last Name</FieldLabel>
                <Input value={lastName} id="lastName" autoComplete="off" placeholder="Doe" onChange={(e) => setLastName(e.target.value)} />
            </Field>
            <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                <FieldLabel htmlFor="email">email</FieldLabel>
                <Input value={email} id="email" autoComplete="off" placeholder="John@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
            </Field>
            <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                <FieldLabel htmlFor="password">password</FieldLabel>
                <Input value={password} type='password' id="password" autoComplete="off" placeholder='**********' onChange={(e) => setPassword(e.target.value)}/>
            </Field>
            <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                <FieldLabel htmlFor="role">Role</FieldLabel>
                <Select defaultValue={"Crew"} value={role} onValueChange={(value) => setRole(value!)}>
                    <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="ADMIN">ADMIN</SelectItem>
                        <SelectItem value="CREW">CREW</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
            </Field>
            <div className='flex justify-center items-center w-70 ml-10'>
                <Field>
                <Button id="submit" type='submit' onClick={signup} className={"hover:transform hover:scale-105 ease-in duration-200"}>Submit</Button>
                <div className='flex justify-center items-center'>
                  <FieldDescription className='ml-7'>Already have an account ? <Link href={"/login"}>Sign In</Link></FieldDescription>
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