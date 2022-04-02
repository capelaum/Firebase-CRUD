import { Client } from 'core/Client'
import { EditIcon, TrashIcon } from './icons'

interface ActionButtonProps {
  client: Client
  variant: 'edit' | 'delete'
  onClick: (client: Client) => void
}

export function ActionButton({ client, variant, onClick }: ActionButtonProps) {
  const ButtonIcon = variant === 'edit' ? EditIcon : TrashIcon
  const textColor = variant === 'edit' ? 'text-green-600' : 'text-red-500'

  return (
    <button
      onClick={() => onClick(client)}
      className={`
        flex justify-center items-center
      text-green-600 rounded-full p-2 m-1
      hover:bg-indigo-50
        ${textColor}
      `}
    >
      {ButtonIcon}
    </button>
  )
}
