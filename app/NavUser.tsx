'use client';

import {
    Menubar,
    MenubarMenu,
} from '@/components/ui/menubar';

// import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function NavUser() {
    // const router = useRouter();

    // const GoToCalendar = () => {
    //     router.push('/calendar');
    // };
    // const GoToBooking = () => {
    //     router.push('/booking');
    // };
    return (
        <div className="flex justify-between items-center p-2 border-b border-gray-200 dark:border-gray-700">
            <Menubar className=''>
                <MenubarMenu >
                    <div className='uppercase font-bold'>Biglite Estates</div>
                </MenubarMenu>
               
        <div className='float-right'>
            Test
        </div>
            </Menubar>
            <ThemeToggle />
        </div>
    );
}
