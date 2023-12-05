import Logo from '@/components/logo'

export default function Home() {
  return (
    <>
      <main className='h-screen w-screen bg-[#42599a] text-white text-3xl font-light flex flex-col items-center justify-center gap-1'>
        <Logo width={500} />
        <p>We&apos;re coming soon!!</p>
      </main>
    </>
  )
}
