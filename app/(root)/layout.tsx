import { isAuthenticated } from '@/lib/actions/auth.action';
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'
import { Button } from '@/components/ui/button';
import { signOut } from '@/lib/actions/auth.action';

const RootLayout = async ({ children} : {children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className='root-layout'>
      <nav className="flex justify-between items-center">
        <Link href='/' className="flex items-center gap-2">
          <Image src='/logo.svg' alt='Logo' width={38} height={32} />
          <h2 className='text-primary-100'>Prepwise</h2>
        </Link>
        <form action={signOut}>
          <Button variant="outline" className="text-primary-100">
            Sign Out
          </Button>
        </form>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout