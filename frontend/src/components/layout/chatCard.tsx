'use client';
import { useActiveChat } from '@/helpers/active-chat';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const ChatCard = ({ i }: { i: number }) => {
  const isActive = useActiveChat();
  return (
    <Link href={`/chat/u/${i}`}>
      <div
        className={cn(
          'p-3 h-20 hover:bg-primary/30 grid grid-cols-12 gap-x-3 border-b border-gray-700 cursor-pointer',
          isActive(`/chat/u/${i}`) && 'bg-primary/30'
        )}
      >
        <div className='col-span-3 bg-primary h-full rounded-md flex justify-center items-center'>
          <span className='text-4xl font-bold'>ZA</span>
        </div>
        <div className='col-span-9 h-full'>
          <span className='font-semibold'>Design Char</span>
          <p className='text-xs'>Hey! we are here</p>
        </div>
      </div>
    </Link>
  );
};

export { ChatCard };
