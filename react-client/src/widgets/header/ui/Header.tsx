import { routes } from "@/shared/routes";
import React from "react";
import { Link } from "react-router";
import { CartIcon } from "./CartIcon";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

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
    <header className={`${isScrolled ? "backdrop-blur-lg bg-black/50" : "backdrop-blur-none bg-transparent"} sticky top-0 right-0 left-0 w-full h-fit flex justify-between items-center gap-4 p-4 transition-all duration-300`}>
      <Link to={routes.HOME.to} className="text-2xl font-semibold">LImba Store.</Link>
      <nav className="flex items-center gap-4">
        <Link className="transition-all duration-300 hover:text-emerald-500" to={routes.AUTH.to}>Auth</Link>
        <Link className="transition-all duration-300 hover:text-emerald-500" to={routes.PROFILE.to}>Profile</Link>
        <CartIcon />
      </nav>
    </header>
  )
}
