export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* left */}
      <div className="flex flex-col items-start justify-between px-28 py-16">

      </div>

      {/* rigth */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">Você ainda não criou nenhuma lembrança, comece a{' '}
          <a href="" className="underline hover:text-gray-50">criar agora</a>
          !
          </p>
        </div>
      </div>
    </main>
  )
}
