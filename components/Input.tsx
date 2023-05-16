type Props = {
  value: string
  onChange: (value: string) => void
}

const Input: React.FC<Props> = ({ value, onChange }) => (
  <input
    value={value}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(e.target.value)
    }
    className="border border-black rounded min-h-[2.75rem] p-3 focus:outline-none focus:shadow-md"
  />
)

export default Input
