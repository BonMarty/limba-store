import React from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
}

export function Input(props: InputProps) {
  const { label, ...rest } = props

  return (
    <label className="w-full">
      {label ? label : null}
      <input className={`px-4 py-1.5 w-full rounded-lg outline-none border transition-all duration-300 ${rest.value ? "border-white" : "border-gray-500 hover:border-white"}`} {...rest} />
    </label>
  )
}
