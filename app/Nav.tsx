'use client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const router = useRouter();

  const GoToCalendar = () => {
    router.push('/calendar');
  };
  const GoToBooking = () => {
    router.push('/booking');
  };
  return (
    <div className="flex justify-between items-center p-2    bg-transparent  text-white  w-full">
      <Menubar className='gap-4 '>
        <MenubarMenu >
          <div className='uppercase font-bold '>Biglite Estates</div>
        </MenubarMenu>
        <div className='w-20'></div>
        <MenubarMenu >
          <button className='mx-2 px-2'>Home</button>
          <MenubarContent></MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <button className='mx-2 px-2 ' onClick={GoToCalendar}>Calendar</button>
          <MenubarContent></MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <button className=' mx-2 px-2 NavBefore ' onClick={GoToBooking}>Booking</button>
          <MenubarContent></MenubarContent>
        </MenubarMenu>
      </Menubar>
      {/* <ThemeToggle /> */}
    </div>
  );
}
