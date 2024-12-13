import React from 'react';

const Authlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-screen w-full flex items-center justify-center'>
      <div className='max-w-lg px-2 w-full'>{children}</div>
    </main>
  );
};

export default Authlayout;
