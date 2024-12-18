import { notFound } from 'next/navigation';
import React from 'react';

interface ChatInboxProps {
  params: {
    [key: string]: string | undefined;
  };
}

const ChatInbox = async ({ params }: ChatInboxProps) => {
  const { id } = await params;
  if (!id) notFound();
  return <div>ChatInbox {id}</div>;
};

export default ChatInbox;
