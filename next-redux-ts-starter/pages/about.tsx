import React from 'react'
import dynamic from 'next/dynamic'

const AboutPage = dynamic(() => import('components/pages/AboutPage'))

export default function about() {
  return (
    <div>
      <AboutPage></AboutPage>
    </div>
  )
}
