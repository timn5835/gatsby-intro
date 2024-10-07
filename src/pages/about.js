// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, whic I built with Gatsby.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => {
  return (
    <>
      <title>About Me</title>
      <meta name="description" content="This page will tell you about me." />
    </>
  )
}

// Step 3: Export your component
export default AboutPage