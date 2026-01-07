import { routes } from "@/shared/routes";
import React from "react";
import { Link } from "react-router";
import { CartIcon } from "./CartIcon";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(() => window.scrollY > 0 ? true : false)

  React.useEffect(() => {
    const controller = new AbortController()

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }, { signal: controller.signal })

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <header className={`${isScrolled ? "backdrop-blur-lg bg-black/50" : "backdrop-blur-none bg-transparent"} sticky top-0 right-0 left-0 z-10 w-full h-fit flex justify-between items-center gap-4 p-4 transition-all duration-300`}>
      <Link to={routes.HOME.to} className="text-2xl font-semibold">LImba Store.</Link>
      <nav className="flex items-center gap-4">
        <Link className="transition-all duration-300 hover:text-emerald-500" to={routes.AUTH.to}>Auth</Link>
        <Link className="transition-all duration-300 hover:text-emerald-500" to={routes.PROFILE.to}>
          <svg className="transition-all duration-300 fill-white hover:fill-emerald-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
          </svg>
        </Link>
        <CartIcon />
      </nav>
    </header>
  )
}
