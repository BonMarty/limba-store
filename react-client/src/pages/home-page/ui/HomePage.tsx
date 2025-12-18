import { routes } from "@/shared/routes";
import { Button } from "@/shared/ui";
import { Link } from "react-router";

export function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className='text-4xl'>LImba Store.</h1>
      <Link to={routes.PRODUCTS.to}>Products</Link>
      <div className="flex items-center gap-2">
        <Button className="px-4 py-1.5 rounded transition-colors duration-300 cursor-pointer text-white bg-sky-500 hover:bg-blue-500">Click me!</Button>
        <Button className="px-4 py-1.5 rounded transition-colors duration-300 cursor-pointer text-white bg-fuchsia-500 hover:bg-purple-500">Click me!</Button>
        <Button className="px-4 py-1.5 rounded transition-colors duration-300 cursor-pointer text-white bg-emerald-500 hover:bg-teal-500">Click me!</Button>
      </div>
    </div>
  )
}
