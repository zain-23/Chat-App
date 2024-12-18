import { notFound } from 'next/navigation';
import React from 'react';

interface ChatInboxProps {
  params: {
    [key: string]: string | undefined;
  };
}

const ChatInbox = ({ params }: ChatInboxProps) => {
  const id = params.id;
  if (!id) notFound();
  return <div>ChatInbox {id}</div>;
};

export default ChatInbox;
