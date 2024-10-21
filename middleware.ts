import { i18nRouter } from 'next-i18n-router'
import i18n from './i18nConfig.mjs'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18n)
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
}
