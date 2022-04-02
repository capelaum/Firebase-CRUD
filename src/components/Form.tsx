import { Client } from 'core/Client'
import { FormEvent, useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'

interface FormProps {
  client: Client
  cancel: () => void
  saveClient: (client: Client) => void
}

export function Form({ client, cancel, saveClient }: FormProps) {
  const [name, setName] = useState(client.name ?? '')
  const [email, setEmail] = useState(client.email ?? '')

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    saveClient(new Client(name, email, client.id))
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => handleOnSubmit(e)}>
      {client.id && (
        <span>
          <strong>ID:</strong> {client.id}
        </span>
      )}

      <Input type="text" name="Name" value={name} onChange={setName} required />
      <Input
        type="email"
        name="Email"
        value={email}
        onChange={setEmail}
        required
      />
      <div className="flex justify-start gap-4 mt-4">
        <Button color="blue">{client.id ? 'Update' : 'Create'}</Button>
        <Button color="red" onClick={cancel}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
