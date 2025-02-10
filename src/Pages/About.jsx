import React from 'react'
import AboutMe from '../components/layout/AboutMe/AboutMe'
import HeadSeo from '../components/ui/HeadSeo/HeadSeo'

const About = () => {
  return (
    <>
      <HeadSeo
        title="About Abduazim Mahmudov | Frontend Developer"
        description="Learn more about Abbos Valiev, a passionate frontend developer, teacher, and freelancer who creates complex and innovative websites."
        keywords="About Abbos Valiev, Frontend Developer, Web Development, Teacher, Freelancer, React Developer"
      />
      <AboutMe />
    </>
  )
}

export default About