'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerClose,
    DrawerTrigger,
    DrawerFooter,
  } from "@/components/ui/drawer";
import { Field, FieldLabel, FieldDescription, FieldGroup, FieldSet, FieldContent, FieldTitle,FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import axios from "axios"
import {useState, useEffect, useMemo} from "react"
import { Button } from '@base-ui/react'
import Link from 'next/link'
import { toast } from "sonner"

export interface users {
    id : number,
    firstName: string,
    lastName: string,
    email: string,
    role: string
}

export default function page() {
    const [users, setUsers] = useState([] as users[])
    const [id, setId] = useState(0)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')

    const [filterFirstName, setFilterFirstName] = useState('')
    const [filterLastName, setFilterLastName] = useState('')
    const [filterEmail, setFilterEmail] = useState('')
    const [filterRole, setFilterRole] = useState('')



    useEffect(() => {
        async function fetchUsers() {
            const response = await axios.get('http://localhost:3000/api/v1/user/all')
            setUsers(response.data)
        }
        fetchUsers()
    }, [])
    
    async function signup() {
           const user = await axios.post('http://localhost:3000/api/v1/auth/signup', {email, firstName, lastName, password, role})
           
        }
    async function deleteUser(id : number) {
           const user = await axios.delete(`http://localhost:3000/api/v1/user/${id}`)
           
        }
    

    const Filter = useMemo(() => {
        return users.filter(u => {
            const matchRole = !filterRole ||
            u.role === filterRole;
            const matchFirstName = u.firstName.toLowerCase().includes(filterFirstName.toLowerCase());
            const matchLastName = u.lastName.toLowerCase().includes(filterLastName.toLowerCase());
            const matchEmail = u.email.toLowerCase().includes(filterEmail.toLowerCase());
            return matchFirstName && matchLastName && matchEmail && matchRole;
        });
        }, [users, filterRole, filterFirstName, filterLastName, filterEmail]);
    
  return (
    <div className='min-h-screen flex flex-col items-center top-0'>
        <div className="flex flex-1 w-full">
            <div className="flex flex-col items-center flex-1 w-full">
                <div className="flex justify-between items-center w-150 mt-40 mb-5">
                    <Select value={filterRole} onValueChange={(value)=> setFilterRole(value!)}>
                    <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="ADMIN">Admin</SelectItem>
                        <SelectItem value="CREW">Crew</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
                <Field className="w-40">
                <FieldLabel className='text-black text-sm font-bold'>Filter By First Name</FieldLabel>
                <Input placeholder='First Name' value={filterFirstName} onChange={(e) => setFilterFirstName(e.target.value)}/>
                </Field>
                <Field className="w-40">
                <FieldLabel className='text-black text-sm font-bold'>Filter By Last Name</FieldLabel>
                <Input placeholder='Last Name' value={filterLastName} onChange={(e) => setFilterLastName(e.target.value)}/>
                </Field>
                <Field className="w-40">
                <FieldLabel className='text-black text-sm font-bold'>Filter By Email</FieldLabel>
                <Input placeholder='Email' value={filterEmail} onChange={(e) => setFilterEmail(e.target.value)}/>
                </Field>
                </div>
                <div>
                    <Table className="w-full mt-5 text-center text-sm">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">id</TableHead>
                            <TableHead className="w-[100px]">First Name</TableHead>
                            <TableHead className="w-[100px]">Last Name</TableHead>                            <TableHead className="w-[100px]">Email</TableHead>
                            <TableHead className="w-[100px]">Role</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                            {Filter.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.id}</TableCell>
                                    <TableCell className="font-medium">{user.firstName}</TableCell>
                                    <TableCell className="font-medium">{user.lastName}</TableCell>
                                    <TableCell className="font-medium">{user.email}</TableCell>
                                    <TableCell className="font-medium">{user.role}</TableCell>
                                </TableRow>
                                ))}
                    </TableBody>
                </Table>
                </div>
                <div className="flex justify-between items-center w-40">
                     <Drawer>
                        
                    <DrawerTrigger><Button className="mt-5 bg-green-600 rounded-sm px-2 py-1 hover:bg-green-300 transform: hover:scale-110 ease-in duration-200">Add</Button></DrawerTrigger>
                    
                    <DrawerContent className="flex justify-center items-center w-full">
                        <DrawerHeader>
                        <DrawerTitle>Add A User</DrawerTitle>
                        <DrawerDescription>Enter the Field</DrawerDescription>
                        </DrawerHeader>
                        <div className="flex flex-col items-center justify-center w-full">
                            <FieldSet className='relative z-10'>                                {/* <FieldDescription>Welcome to Ship Management App</FieldDescription> */}
                                <FieldGroup className="flex flex-col w-100 ">
                                    <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                                        <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                                        <Input id="firstName" value={firstName} autoComplete="off" onChange={(e) => setFirstName(e.target.value)}/>
                                    </Field>
                                    <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                                        <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                                        <Input id="lastName" value={lastName} autoComplete="off" onChange={(e) => setLastName(e.target.value)}/>
                                    </Field>
                                    <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                                        <FieldLabel htmlFor="email">Email</FieldLabel>
                                        <Input id="email" value={email} autoComplete="off" onChange={(e) => setEmail(e.target.value)}/>
                                    </Field>
                                    <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                                        <FieldLabel htmlFor="password">password</FieldLabel>
                                        <Input id="password" value={password} autoComplete="off" onChange={(e) => setPassword(e.target.value)}/>
                                    </Field>
                                    <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                                        <FieldLabel htmlFor="role">Role</FieldLabel>
                                        <Input id="role" value={role} autoComplete="off" onChange={(e) => setRole(e.target.value)}/>
                                    </Field>
                                
                                    <div className='flex flex-col justify-center items-center w-60 ml-10 text-center'>
                                        <Field>
                                        <DrawerFooter>
                                        <Button id="submit" onClick={async () => {await signup(); toast("User created successfully")}} type='submit' className={"ml-6 hover:transform hover:scale-105 bg-black py-2 rounded-lg mb-2 text-white ease-in duration-200"}>Add</Button>
                                        <DrawerClose>
                                            <Button className={"ml-6 hover:transform hover:scale-105 ease-in duration-200"}>Cancel</Button>
                                        </DrawerClose>
                                        </DrawerFooter>
                                    </Field>
                                    </div>
                                    
                                </FieldGroup>
                            </FieldSet>
                        </div>
                    </DrawerContent>
                    </Drawer>
                    <Drawer>
                    <DrawerTrigger><Button className="mt-5 bg-red-600 rounded-sm px-2 py-1 hover:bg-red-200 transform: hover:scale-110 ease-in duration-200">Delete</Button></DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                        <DrawerTitle>Delete A User</DrawerTitle>
                        <DrawerDescription>Enter the User ID</DrawerDescription>
                        </DrawerHeader>
                        <div className="flex flex-col items-center justify-center w-full">
                            <Field className="flex flex-col w-100 ">
                                <FieldLabel htmlFor="shipId">User Id</FieldLabel>
                                <Input id="userId" value={id} autoComplete="off" onChange={(e) => setId(Number(e.target.value))}/>
                            </Field>
                            <div className='flex flex-col justify-center items-center w-60 ml-10 text-center'>
                                        <Field>
                                        <DrawerFooter>
                                        <Button id="submit" type='submit' onClick={async() => {await deleteUser(id); toast("User deleted successfully")}} className={"ml-6 hover:transform hover:scale-105 bg-black py-2 rounded-lg mb-2 text-white ease-in duration-200"}>Delete</Button>
                                        <DrawerClose>
                                            <Button className={"ml-6 hover:transform hover:scale-105 ease-in duration-200"}>Cancel</Button>
                                        </DrawerClose>
                                        </DrawerFooter>
                                    </Field>
                                    </div>
                        </div>
                    </DrawerContent>
                    </Drawer>
                    
                    

                </div>
                <div>
                   
                </div>
                
            </div>

        </div>
    </div>

  )
}

