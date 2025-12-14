import { Button } from "@/shared/ui";

export function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className='text-4xl'>LImba Store.</h1>
      <div className="flex items-center gap-2">
        <Button className="px-4 py-1.5 rounded transition-colors duration-300 cursor-pointer text-white bg-sky-500 hover:bg-blue-500">Click me!</Button>
        <Button className="px-4 py-1.5 rounded transition-colors duration-300 cursor-pointer text-white bg-fuchsia-500 hover:bg-purple-500">Click me!</Button>
        <Button className="px-4 py-1.5 rounded transition-colors duration-300 cursor-pointer text-white bg-emerald-500 hover:bg-teal-500">Click me!</Button>
      </div>
    </div>
  )
}
