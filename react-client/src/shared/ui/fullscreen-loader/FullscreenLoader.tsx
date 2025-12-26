import React from "react"

export function FullscreenLoader() {
  React.useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className='w-svw h-svh fixed inset-0 z-50 space-x-4 flex justify-center items-center bg-neutral-900 text-white'>
      <div className="relative w-16 h-16 rounded-full border-4 border-gray-500">
        <span className="absolute inset-0 scale-[115%] z-10 w-full h-full rounded-full border-4 border-emerald-500 border-t-0 border-l-0 border-r-0 animate-spin"></span>
      </div>
      <p>Loading...</p>
    </div>
  )
}
