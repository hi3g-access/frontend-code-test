import styled from 'styled-components'

type Props = {
  value: string
  onChange: (value: string) => void
}

const Wrapper = styled.input`
  border: 1px solid black;
  border-radius: 0.25rem;
  min-height: 2.75rem;
  padding: 0.75rem;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px black;
  }
`

const Input: React.FC<Props> = ({ value, onChange }) => (
  <Wrapper
    value={value}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      onChange(e.target.value)
    }
  />
)

export default Input
