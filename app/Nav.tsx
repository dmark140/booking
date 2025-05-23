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

  const handleClick = () => {
    router.push('/calendar');
  };

  return (
    <div className="flex justify-between items-center p-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <button onClick={handleClick}>Calendar</button>
          <MenubarContent></MenubarContent>
        </MenubarMenu>
      </Menubar>
      <ThemeToggle />
    </div>
  );
}
