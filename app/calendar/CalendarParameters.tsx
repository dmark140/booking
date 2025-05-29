'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React, { MouseEvent, useState } from 'react'
import SearchSelector from '../reUsableComponents/SearchSelector'

export default function CalendarParameters() {
  const [ParameterProperties, setParameterProperties] = useState("Property")
  const handleSelect = (e: MouseEvent<HTMLDivElement>) => {
    const selectedValue = e.currentTarget.textContent || "";
    setParameterProperties("Property: " + selectedValue);
  };

  // const handleSubmit = (item: string, value: string) => {
  //   console.log('Submitted:', item, value)
  // }


  return (
    <div className='flex gap-1'>
      <DropdownMenu>
        <DropdownMenuTrigger className='border-blue-300 bg-blue-50 text-blue-800   bg-opacity-90 border py-0.5 text-sm rounded-full px-1'>{ParameterProperties}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select Property</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSelect}>Beach Villa1</DropdownMenuItem>
          <DropdownMenuItem onClick={handleSelect}>Beach Villa2</DropdownMenuItem>
          <DropdownMenuItem onClick={handleSelect}>City Pinhouse</DropdownMenuItem>
          <DropdownMenuItem onClick={handleSelect}>Mountain Suite A </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSelect}>Mountain Suite B </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
        <SearchSelector
          tableNames={['Customers', 'Orders', 'Products']}
          onSubmit={(table, value) =>
            console.log(`Search on ${table} for value: ${value}`)
          }
        />
      {/* <Button className='float-right'> Search </Button> */}
    </div>
  )
}
