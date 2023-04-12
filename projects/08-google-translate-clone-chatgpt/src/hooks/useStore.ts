import { useReducer } from 'react'
import type { Action, FromLanguage, Language, State } from '../types.d'
import { AUTO_LANGUAGE } from '../constants'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
}

const reducer = (state: State, action: Action): State => {
  const { type } = action
  switch (type) {
    case 'INTERCHANGE_LANGUAGES':
      if (state.fromLanguage === AUTO_LANGUAGE) return state

      return {
        ...state,
        loading: state.fromText !== '',
        result: '',
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
      }
    case 'SET_FROM_LANGUAGE':
      if (state.fromLanguage === action.payload) return state

      return {
        ...state,
        fromLanguage: action.payload,
        result: '',
        loading: state.fromText !== '',
      }
    case 'SET_TO_LANGUAGE':
      if (state.toLanguage === action.payload) return state

      return {
        ...state,
        toLanguage: action.payload,
        result: '',
        loading: state.fromText !== '',
      }
    case 'SET_FROM_TEXT':
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: '',
      }
    case 'SET_RESULT':
      return {
        ...state,
        loading: false,
        result: action.payload,
      }
    default:
      return state
  }
}

export const useStore = () => {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState)

  const interchangeLanguages = () => {
    dispatch({ type: 'INTERCHANGE_LANGUAGES' })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: 'SET_FROM_LANGUAGE', payload })
  }

  const setToLanguage = (payload: Language) => {
    dispatch({ type: 'SET_TO_LANGUAGE', payload })
  }

  const setFromText = (payload: string) => {
    dispatch({ type: 'SET_FROM_TEXT', payload })
  }

  const setResult = (payload: string) => {
    dispatch({ type: 'SET_RESULT', payload })
  }

  return {
    // properties
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,

    // functions
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  }
}
