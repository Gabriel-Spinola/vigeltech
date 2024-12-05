import { Suspense } from 'react'
import '../style.css'
import { getTranslation, ImplLocale } from './getTranslations'
import Main from './home'
import Header from '../_components/Header'
import HeaderSkeleton from '../_components/skeletons/HomeSkeleton'
import { denoShared } from 'deno-shared/src/deno-shared'
import _Result from 'deno-shared/shared/result'

export default async function Home({ params }: { params: { locale: string } }) {
  const translation = await getTranslation(params.locale as ImplLocale)
  const a = _Result.succeed("")
  console.log(denoShared())
  //

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
