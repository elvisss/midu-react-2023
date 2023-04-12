import { type FromLanguage, type Language, SectionType } from '../types.d'
import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants'

/* interface Props {
  onChange: (language: Language) => void
} */

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: React.FC<Props> = ({ onChange, value, type }) => {
  const handlechange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Language
    onChange(value)
  }

  return (
    <Form.Select value={value} aria-label='Select language' onChange={handlechange}>
      {
        type === SectionType.From && <option value={AUTO_LANGUAGE}>Detect Language</option>
      }
      {
        Object.entries(SUPPORTED_LANGUAGES).map(([key, language]) => {
          return (
            <option key={key} value={key}>{language}</option>
          )
        })
      }
    </Form.Select>
  )
}
