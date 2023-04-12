import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

/* type Props =
  | { type: SectionType.From, loading: boolean, value: FromLanguage, onChange: (text: string) => void }
  | { type: SectionType.To, loading: boolean, value: Language, onChange: (text: string) => void }
 */

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading: boolean }) => {
  if (type === SectionType.From) return 'Introduce Text'
  if (loading) return 'Loading...'
  return 'Translation'
}

export const TextArea: React.FC<Props> = ({ type, loading = false, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  const styles: any = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

  return (
    <Form.Control
      as="textarea"
      placeholder={getPlaceholder({ type, loading })}
      autoFocus={type === SectionType.From}
      disabled={type === SectionType.To}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}
