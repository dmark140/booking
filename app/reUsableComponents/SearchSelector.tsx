'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Input } from '@/components/ui/input'

type SearchSelectorProps = {
  tableNames: string[]
  onSubmit?: (item: string, value: string) => void
}

type FilterEntry = {
  table: string
  value: string
}

export default function SearchSelector({ tableNames, onSubmit }: SearchSelectorProps) {
  const [step, setStep] = useState<'button' | 'list' | 'input'>('button')
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [entries, setEntries] = useState<FilterEntry[]>([])
  const [showPopover, setShowPopover] = useState(false)

  const startSelection = () => {
    setStep('list')
    setShowPopover(true)
  }

  const handleItemClick = (item: string) => {
    setSelectedItem(item)
    setStep('input')
  }

  const handleSubmit = () => {
    if (selectedItem && inputValue) {
      const newEntry = { table: selectedItem, value: inputValue }
      setEntries((prev) => [...prev, newEntry])
      onSubmit?.(selectedItem, inputValue)

      // Reset for next selection
      setSelectedItem(null)
      setInputValue('')
      setStep('list') // go back to list for next selection
    }
  }

  return (
    <div className="  flex">


      {/* Display all submitted filters */}
      {entries.length > 0 && (
        <div className=" gap-1 text-muted-foreground flex ">
          {entries.map((entry, index) => (
            <div key={index} className='border-blue-300 bg-blue-50 text-blue-800  px-2 bg-opacity-90 border py-0.5 text-sm rounded-full  '>
              <span className=" ">{entry.table}</span>: {entry.value}
            </div>
          ))}
        </div>
      )}


     <div className=''>
       <Popover open={showPopover} onOpenChange={setShowPopover}>
        <PopoverTrigger asChild>
          <button onClick={startSelection} className='text-sm border px-2 py-0.5 rounded-full text-muted-foreground' >+ Filter</button>
        </PopoverTrigger>
        <PopoverContent className="">
          {step === 'list' && (
            <div className="space-y-2">
              {tableNames.map((table) => (
                <Button
                  key={table}
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => handleItemClick(table)}
                >
                  {table}
                </Button>
              ))}
            </div>
          )}

          {step === 'input' && selectedItem && (
            <div className="space-y-2">
              <div className="font-medium">{selectedItem}</div>
              <Input
                placeholder={`Enter value for ${selectedItem}`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              />
              <Button onClick={handleSubmit} disabled={!inputValue}>
                Submit
              </Button>
            </div>
          )}
        </PopoverContent>
      </Popover>
     </div>

    </div>
  )
}
