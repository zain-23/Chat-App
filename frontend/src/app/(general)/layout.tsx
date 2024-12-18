import { Sidebar } from '@/components/layout';
import QueryProvider from '@/provider/queryProvider';
import React from 'react';

interface ChatLayoutProps {
  children: React.ReactNode;
}

const ChatLayout = ({ children }: ChatLayoutProps) => {
  return (
    <main className='w-full h-screen grid grid-cols-12'>
      <QueryProvider>
        <Sidebar />
        <div
          className='w-full h-full overflow-y-auto col-span-9 p-4'
          role='main'
        >
          {children}
        </div>
      </QueryProvider>
    </main>
  );
};

export default ChatLayout;
