'use server'

export type ImplLocale = 'pt-BR' | 'en-US' | 'pt' | 'en'

const translations = {
  pt: () =>
    import('../translations/pt-BR.json').then((module) => module.default),
  'pt-BR': () =>
    import('../translations/pt-BR.json').then((module) => module.default),
  'en-US': () =>
    import('../translations/en-US.json').then((module) => module.default),
  en: () =>
    import('../translations/en-US.json').then((module) => module.default),
}

export type LocaleTranslation<T extends ImplLocale> = Awaited<
  ReturnType<(typeof translations)[T]>
>

export async function getTranslation(
  locale: ImplLocale,
): Promise<LocaleTranslation<ImplLocale>> {
  const loadTranslation = translations[locale]

  if (!loadTranslation || typeof loadTranslation !== 'function') {
    console.error(`No translations found for locale: ${locale}`)
    return {} as LocaleTranslation<ImplLocale>
  }

  return loadTranslation()
}
