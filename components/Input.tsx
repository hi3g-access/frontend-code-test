/* eslint-disable no-unused-vars */
type Props = {
  value: string
  onChange: (value: string) => void
}

const Input = ({ value, onChange }: Props) => (
  <input
    value={value}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(e.target.value)
    }
    className="min-h-[2.75rem] rounded border border-black p-3 focus:shadow-md focus:outline-none"
  />
)

export default Input
