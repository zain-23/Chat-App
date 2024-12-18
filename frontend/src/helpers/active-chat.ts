import { usePathname } from 'next/navigation';

const useActiveChat = () => {
  const pathname = usePathname();
  return (path: string) => {
    return path === pathname;
  };
};

export { useActiveChat };
