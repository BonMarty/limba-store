import { setCredentials } from "@/entities/auth";
import { useAppDispatch } from "@/shared/lib";
import { Button, Input } from "@/shared/ui";
import React from "react";
import { useLoginMutation } from "../api";

export function LoginForm() {
  const [trigger] = useLoginMutation()
  const dispatch = useAppDispatch()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const result = await trigger({ email, password }).unwrap()

    dispatch(setCredentials({ token: result.accessToken }))
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Input name="email" placeholder="Email" />
      <Input name="password" placeholder="Password" />
      <Button>Login</Button>
    </form>
  )
}
