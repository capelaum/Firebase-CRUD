import { ReactNode } from 'react'
import { Title } from './Title'

interface ContainerProps {
  title: string
  children: ReactNode
}

export function Container({ title, children }: ContainerProps) {
  return (
    <div
      className="
      flex flex-col
      max-w-7xl w-full
      bg-gray-100 text-gray-900
      rounded-xl shadow-lg
      overflow-x-scroll sm:overflow-x-clip
  "
    >
      <Title title={title} />
      <div className="p-5">{children}</div>
    </div>
  )
}
