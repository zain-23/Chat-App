import { Sidebar } from '@/components/layout';
import React from 'react';

interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout = ({ children }: ChatLayoutProps) => {
  return (
    <main className='w-full h-screen grid grid-cols-12'>
      <Sidebar />
      <div
        className='w-full h-full overflow-y-auto col-span-9 p-4'
        role='main'
      >
        {children}
      </div>
    </main>
  );
};

export default ChatLayout;
