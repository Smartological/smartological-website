// local imports
import { HorizontalLogo } from '@/components/logo'

// homepage
export default function Home() {
  return (
    <main className='bg-primary dark flex flex-col gap-2 h-screen items-center justify-center text-center w-screen'>
      <HorizontalLogo colorClass='fill-logo-border' />
      <h2 className='text-3xl text-foreground'>We&rsquo;re coming soon!!!</h2>
    </main>
  )
}
