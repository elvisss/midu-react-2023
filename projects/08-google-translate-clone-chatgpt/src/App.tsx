import { Container, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { ClipBoardIcon, Icon, SpeakerIcon } from './Components/Icon'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE, VOICES_LANGUAGES } from './constants'
import { LanguageSelector } from './Components/LanguageSelector'
import { TextArea } from './Components/TextArea'
import { useEffect } from 'react'
import { translate } from './services/translate'
import { useDebounce } from './hooks/useDebounce'
import { SectionType } from './types.d'

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  } = useStore()

  const debouncedValue = useDebounce<string>(fromText)

  useEffect(() => {
    if (debouncedValue === '') return
    translate({ fromLanguage, toLanguage, text: debouncedValue })
      .then((res) => {
        if (res == null) return
        setResult(res)
      })
      .catch(() => {
        setResult('Error')
      })
  }, [debouncedValue, fromLanguage, toLanguage])

  const handleClipBoard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }

  const handleSpeaker = () => {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = VOICES_LANGUAGES[toLanguage]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  return (
    <Container fluid>
      <h2>Google Translate</h2>
      <Row>
        <Col>
          <LanguageSelector
            type={SectionType.From}
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          <br />
          <TextArea
            type={SectionType.From}
            value={fromText}
            onChange={setFromText}
          />
        </Col>
        <Col xs="auto">
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <Icon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector
            type={SectionType.To}
            value={toLanguage}
            onChange={setToLanguage}
          />
          <br />
          <div style={{ position: 'relative' }}>
            <TextArea
              type={SectionType.To}
              value={result}
              onChange={setResult}
              loading={loading}
            />
            <div
              style={{
                position: 'absolute',
                left: '0',
                bottom: '0',
                display: 'flex',
              }}
            >
              <Button
                variant="link"
                onClick={handleClipBoard}
              >
                <ClipBoardIcon />
              </Button>
              <Button
                variant="link"
                onClick={handleSpeaker}
              >
                <SpeakerIcon />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App
