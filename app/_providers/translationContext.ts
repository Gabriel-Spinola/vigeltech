'use client'

import { createContext } from 'react'
import { ImplLocale, LocaleTranslation } from '../[locale]/getTranslations'

interface TranslationContextType {
  translation: LocaleTranslation<ImplLocale>
}

export const TranslationContext = createContext<TranslationContextType | null>(
  null,
)
