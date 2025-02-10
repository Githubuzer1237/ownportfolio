import React from 'react'
import Works from '../components/layout/Works/Works'
import HeadSeo from '../components/ui/HeadSeo/HeadSeo'

const Portfolio = () => {
    return (
        <>
            <HeadSeo
                title="Portfolio | Abduazim Mahmudov"
                description="Explore Abbos Valiev's portfolio, showcasing innovative and professional web projects using React, JavaScript, and modern web technologies."
                keywords="Portfolio, Abbos Valiev, React Projects, JavaScript Developer, Frontend Developer, Web Developer, Freelance Projects, Website Development, HTML, CSS, Modern Web Design, UI/UX"
            />
            <Works />
        </>
    )
}

export default Portfolio