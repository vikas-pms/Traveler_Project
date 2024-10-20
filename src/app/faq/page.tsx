import FaqPage from '@/components/FaqPage'
import { SeekSolutionApi } from '@/utils/SeekSolutionApi'
import React from 'react'
const api = new SeekSolutionApi()

 async function page() {
  const faqs = await api.FAQs.list()


  return (
    <>
    <FaqPage faqs={faqs}/>
    </>
  )
}

export default page