import React from 'react';
import { CircleCheckBig, TriangleAlert } from 'lucide-react';

const FormError = ({ message }: { message: string }) => {
  return (
    message !== '' && (
      <div className='px-6 bg-red-300/70 text-red-500 mt-4 rounded-sm flex items-center gap-x-2 py-2'>
        <TriangleAlert />
        {message}
      </div>
    )
  );
};
const FormSuccess = ({ message }: { message: string }) => {
  return (
    message !== '' && (
      <div className='px-6 bg-green-300/70 text-green-500 mt-4 rounded-sm flex items-center gap-x-2 py-2'>
        <CircleCheckBig />
        {message}
      </div>
    )
  );
};

export { FormError, FormSuccess };
