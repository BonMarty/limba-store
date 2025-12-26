import { routes } from "@/shared/routes";
import { Link } from "react-router";

export function Header() {
  return (
    <header className="flex justify-between items-center gap-4 p-4">
      <Link to={routes.HOME.to} className="text-2xl font-semibold">LImba Store.</Link>
      <Link to={routes.AUTH.to}>Auth</Link>
    </header>
  )
}
