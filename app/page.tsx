import { HorizontalLogo } from '@/components/logo'

// homepage
export default function Home() {
  return (
    <main>
      <header className='bg-primary dark flex flex-col gap-2 h-screen items-center justify-center w-screen'>
        <HorizontalLogo width={500} />
        <p className='text-3xl'>We&rsquo;re coming soon!!!</p>
      </header>
    </main>
  )
}
