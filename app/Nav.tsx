'use client';
import {
  Menubar,
} from '@/components/ui/menubar';
import { useRouter } from 'next/navigation';
type Props = {
  className?: string;
}
export default function Nav({ className }: Props) {
  const router = useRouter();

  const GoToCalendar = () => {
    router.push('/calendar');
  };
  const GoToBooking = () => {
    router.push('/booking');
  };
  return (
    <div className={`flex justify-between items-center p-2    bg-transparent   border-b w-full ${className}`}>
      <div className=' px-4  max-w-[1128px]  w-full mx-auto flex justify-between items-center '>
        <Menubar className='gap-4 w-full  '>
          <div className='flex  w-full'>
            <div className='uppercase font-bold'>Biglite Estates</div>
            <div className='ml-auto w-fit'>
              <button className='mx-2 px-2'>Home</button>
              <button className='mx-2 px-2' onClick={GoToCalendar}>Calendar</button>
              <button className='mx-2 px-2 NavBefore' onClick={GoToBooking}>Booking</button>
            </div>
          </div>
        </Menubar>
      </div>
      {/* <ThemeToggle /> */}
    </div>
  );
}
