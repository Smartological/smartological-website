// local imports
import { HorizontalLogo } from '@/components/logo'

// homepage
export default function Home() {
  return (
    <main className='bg-primary dark flex flex-col gap-3 h-screen items-center justify-center text-center w-screen'>
      <HorizontalLogo colorClass='fill-logo-border' />
      <h2 className='text-foreground'>আমরা শীঘ্রই আসছি!!!</h2>
    </main>
  )
}
