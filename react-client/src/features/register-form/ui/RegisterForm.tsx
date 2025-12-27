import { Button, Input } from "@/shared/ui";
import React from "react";

export function RegisterForm() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  return (
    <form className="flex flex-col gap-4">
      <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button>Register</Button>
    </form>
  )
}
