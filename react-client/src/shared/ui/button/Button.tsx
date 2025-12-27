export function Button(props: React.ComponentPropsWithoutRef<"button">) {
  const { children, ...rest } = props

  return (
    <button className="px-4 py-1.5 rounded-lg cursor-pointer transition-all duration-300 text-white bg-emerald-500 hover:bg-teal-500" {...rest}>{children}</button>
  )
}
