interface TableProps<T> extends React.ComponentPropsWithoutRef<"table"> {
  data: T[];
  renderHeader: () => React.ReactNode;
  renderRow: (row: T) => React.ReactNode
}

export function Table<T>(props: TableProps<T>) {
  const { data, renderHeader, renderRow, ...rest } = props

  return (
    <div className="overflow-y-auto max-w-svw">
      <table {...rest} className="table-fixed border-collapse min-w-2xl">
        <thead>{renderHeader()}</thead>
        <tbody>
          {data.map((item) => renderRow(item))}
        </tbody>
      </table>
    </div>
  )
}

Table.Th = function Th(props: React.ComponentPropsWithoutRef<"th">) {
  const { children, ...rest } = props

  return <th {...rest} className="px-4 py-2 text-left first:pl-0 last:pr-0">{children}</th>
}

Table.Td = function Td(props: React.ComponentPropsWithoutRef<"td">) {
  const { children, ...rest } = props

  return <td {...rest} className="px-4 py-2 text-left first:pl-0 last:pr-0">{children}</td>
}