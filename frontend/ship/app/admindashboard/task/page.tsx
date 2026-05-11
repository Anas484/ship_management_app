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

export interface ship {
    id : number,
    name: string,
    model: string,
    capacity: number
}

export default function page() {
    const [ships, setShips] = useState([] as ship[])
    const [shipId, setId] = useState(0)
    const [shipName, setShipName] = useState('')
    const [shipCapacity, setCapacity] = useState(0)
    const [shipModel, setModel] = useState('')


    useEffect(() => {
        async function fetchShips() {
            const response = await axios.get('http://localhost:3000/api/v1/ships')
            setShips(response.data)
        }
        fetchShips()
    }, [])
    
    const capacityFilter = useMemo(() => {
        return ships.filter(u => u.capacity >= shipCapacity);
        }, [ships, shipCapacity]);
    
    const modelFilter = useMemo(() => {
        return ships.filter(u => u.model.includes(shipModel));
        }, [ships, shipModel]);

  return (
    <div className='min-h-screen flex flex-col items-center top-0'>
        <div className="flex flex-1 w-full">
            <div className="flex flex-col items-center flex-1 w-full">
                <div className="flex justify-between items-center w-100 mt-40 mb-5">
                    <Select defaultValue={"All"}>
                    <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="Samsung">Samsung</SelectItem>
                        <SelectItem value="Hitachi">Hitachi</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
                <Select defaultValue={"All"}>
                    <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="ADMIN">Samsung</SelectItem>
                        <SelectItem value="CREW">Hitachi</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
                <Select defaultValue={"All"}>
                    <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="ADMIN">Samsung</SelectItem>
                        <SelectItem value="CREW">Hitachi</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
                </div>
                <div>
                    <Table className="w-full mt-5 text-center text-sm">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">id</TableHead>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead className="w-[100px]">Model</TableHead>
                            <TableHead className="w-[100px]">Capacity</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            {ships.map((ship) => (
                                <TableRow key={ship.id}>
                                    <TableCell className="font-medium">{ship.id}</TableCell>
                                    <TableCell className="font-medium">{ship.name}</TableCell>
                                    <TableCell className="font-medium">{ship.model}</TableCell>
                                    <TableCell className="font-medium">{ship.capacity}</TableCell>
                                </TableRow>
                                ))}
                        </TableRow>
                    </TableBody>
                </Table>
                </div>
                <div className="flex justify-between items-center w-40">
                     <Drawer>
                    <DrawerTrigger><Button className="mt-5 bg-green-600 rounded-sm px-2 py-1 hover:bg-green-300 transform: hover:scale-110 ease-in duration-200">Add</Button></DrawerTrigger>
                    <DrawerContent className="flex justify-center items-center w-full">
                        <div className="flex flex-col items-center justify-center w-full">
                            <FieldSet className='relative z-10'>
                                <FieldDescription className='text-black text-2xl font-bold'>Add Ship</FieldDescription>
                                {/* <FieldDescription>Welcome to Ship Management App</FieldDescription> */}
                                <FieldGroup className="flex flex-col w-100 ">
                                    <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                                        <FieldLabel htmlFor="shipName">Ship Name</FieldLabel>
                                        <Input id="shipName" value={shipName} autoComplete="off" onChange={(e) => setShipName(e.target.value)}/>
                                    </Field>
                                    <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                                        <FieldLabel htmlFor="shipModel">Ship Model</FieldLabel>
                                        <Input id="shipModel" value={shipModel} autoComplete="off" onChange={(e) => setModel(e.target.value)}/>
                                    </Field>
                                    <Field className='hover:transform hover:scale-101 ease-in duration-200'>
                                        <FieldLabel htmlFor="shipCapacity">Ship Capacity</FieldLabel>
                                        <Input id="shipCapacity" value={shipCapacity} autoComplete="off" onChange={(e) => setCapacity(Number(e.target.value))}/>
                                    </Field>
                                
                                    <div className='flex flex-col justify-center items-center w-60 ml-10 text-center'>
                                        <Field>
                                        <DrawerFooter>
                                        <Button id="submit" type='submit' className={"ml-6 hover:transform hover:scale-105 bg-black py-2 rounded-lg mb-2 text-white ease-in duration-200"}>Add</Button>
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
                        <DrawerTitle>Delete A Ship</DrawerTitle>
                        <DrawerDescription>Enter the Ship ID</DrawerDescription>
                        </DrawerHeader>
                        <div className="flex flex-col items-center justify-center w-full">
                            <Field className="flex flex-col w-100 ">
                                <FieldLabel htmlFor="shipId">Ship ID</FieldLabel>
                                <Input id="shipId" value={shipId} autoComplete="off" onChange={(e) => setId(Number(e.target.value))}/>
                            </Field>
                            <div className='flex flex-col justify-center items-center w-60 ml-10 text-center'>
                                        <Field>
                                        <DrawerFooter>
                                        <Button id="submit" type='submit' className={"ml-6 hover:transform hover:scale-105 bg-black py-2 rounded-lg mb-2 text-white ease-in duration-200"}>Delete</Button>
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

