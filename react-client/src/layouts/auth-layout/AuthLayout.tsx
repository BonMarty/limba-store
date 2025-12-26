export function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col w-full min-h-svh bg-slate-900 text-white">
      <header className="absolute top-0 left-0 right-0 h-fit p-4">
        <h2 className="text-2xl font-semibold">LImba Store.</h2>
      </header>
      <main className="flex-1 flex justify-center items-center">{children}</main>
    </div>
  )
}
