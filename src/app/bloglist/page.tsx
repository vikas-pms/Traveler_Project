import BlogListingPage from '@/components/BlogListingPage'
import { SeekSolutionApi } from '@/utils/SeekSolutionApi'
import React from 'react'
const api = new SeekSolutionApi()

async function page() {
  const blogs = await api.BlogsList.list()
  return (
    <BlogListingPage blogsList={blogs}/>
  )
}

export default page