import React from 'react'
import { H1, Layout, P } from '@/Components'

const meta = {
  title: 'inertia-react@v0.1.4',
}

const Page = () => {
  return (
    <>
      <H1>inertia-react@v0.1.4</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on December 16, 2019</div>
      <P>Add support for persistent layouts.</P>
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page