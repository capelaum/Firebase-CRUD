import { ReactNode } from 'react'

interface AddClientButtonProps {
  children: ReactNode
  color?: 'green' | 'blue' | 'gray' | 'indigo' | 'red'
  className?: string
  onClick?: () => void
}

export function Button({
  children,
  color,
  className,
  onClick
}: AddClientButtonProps) {
  const buttonGradient = setButtonGradient()

  function setButtonGradient() {
    switch (color) {
      case 'green':
        return 'from-green-400 to-green-700'
      case 'blue':
        return 'from-blue-400 to-blue-700'
      case 'gray':
        return 'from-gray-400 to-gray-700'
      case 'red':
        return 'from-red-400 to-red-700'
      default:
        return 'from-indigo-400 to-indigo-700'
    }
  }

  return (
    <button
      onClick={onClick}
      className={`
        flex justify-center items-center rounded-md
        bg-gradient-to-r ${buttonGradient}
        text-white px-4 py-2 font-semibold text-lg
        hover:brightness-90
        ${className}
      `}
    >
      {children}
    </button>
  )
}
