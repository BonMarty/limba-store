import { setCredentials } from "@/entities/auth";
import { useAppDispatch } from "@/shared/lib";
import { Button, Input } from "@/shared/ui";
import { useRegisterMutation } from "../api";

export function RegisterForm() {
  const [trigger] = useRegisterMutation()
  const dispatch = useAppDispatch()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const result = await trigger({ name, email, password }).unwrap()

    dispatch(setCredentials({ token: result.accessToken }))
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Input placeholder="Name" name="name" />
      <Input placeholder="Email" name="email" />
      <Input placeholder="Password" name="password" />
      <Button>Register</Button>
    </form>
  )
}
