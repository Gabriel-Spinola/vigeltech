import { Suspense } from 'react'
import '../style.css'
import { getTranslation, ImplLocale } from './getTranslations'
import Main from './home'
import Header from '@/app/_components/Header'
import HeaderSkeleton from '../_components/skeletons/HomeSkeleton'

export default async function Home({ params }: { params: { locale: string } }) {
  const translation = await getTranslation(params.locale as ImplLocale)

  return (
    <>
      <Suspense fallback={<HeaderSkeleton />}>
        <Header locale={params.locale as ImplLocale} />
        <Main
          translation={translation}
          locale={params.locale as ImplLocale}
        ></Main>
      </Suspense>
    </>
  )
}
