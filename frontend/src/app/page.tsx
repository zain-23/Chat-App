import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link
        className={buttonVariants({})}
        href={'/sign-in'}
      >
        Login
      </Link>
    </>
  );
}
