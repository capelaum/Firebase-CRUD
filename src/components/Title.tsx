interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div className="flex flex-col justify-center pt-5">
      <h1 className="pl-5 pb-5 text-2xl font-bold">{title}</h1>
      <hr className="border-2 border-indigo-500" />
    </div>
  )
}
