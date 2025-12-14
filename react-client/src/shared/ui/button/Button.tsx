export function Button(props: React.ComponentPropsWithoutRef<"button">) {
  const { children, ...rest } = props

  return (
    <button {...rest}>{children}</button>
  )
}
