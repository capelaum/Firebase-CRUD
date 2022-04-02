interface InputProps {
  name: string
  type?: 'text' | 'number' | 'email'
  value: string
  required?: boolean
  disabled?: boolean
  onChange?: (value: string) => void
}

export function Input({
  name,
  type,
  value,
  required,
  disabled,
  onChange
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="pb-2 pl-1 font-semibold text-lg" htmlFor={name}>
        {name}
      </label>
      <input
        type={type ?? 'text'}
        value={value}
        required={required}
        disabled={disabled}
        name={name}
        className="
          border border-indigo-500 rounded-lg
          focus:outline-none focus:bg-white
          bg-gray-200 text-md
          px-2 py-2
        "
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  )
}
