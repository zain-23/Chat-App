'use client';
import { Input } from '@/components/ui/input';
import { userInstance } from '@/lib/axios';
import { SuccessResponse, User } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { ChatCard } from './chatCard';

const Sidebar = () => {
  const { data, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => userInstance.get<SuccessResponse<User[]>>('/')
  });
  const user = data?.data.data;
  return (
    <aside className='col-span-3 h-full bg-zinc-900 relative overflow-hidden'>
      {/* i want to fixed this on top of its parent */}
      <div className='p-3 w-full space-y-2 bg-zinc-900 col-span-3 sticky top-0 z-10'>
        <h1 className='text-2xl font-semibold'>Chat</h1>
        <Input
          className='bg-primary/30'
          placeholder='Search'
        />
      </div>
      {/* i want to scroll just this */}
      <div className='overflow-y-auto h-full pb-28'>
        {user?.length === 0 ? (
          <p className='text-center'>Opps! Sounds like no user register</p>
        ) : (
          user?.map((details) => (
            <ChatCard
              key={details._id}
              {...details}
            />
          ))
        )}
      </div>
    </aside>
  );
};

export { Sidebar };
