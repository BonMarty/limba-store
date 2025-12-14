import React from 'react';

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
}

export function Input(props: InputProps) {
  const { label, ...rest } = props

  return (
    <label>
      {label ? label : null}
      <input {...rest} />
    </label>
  )
}
