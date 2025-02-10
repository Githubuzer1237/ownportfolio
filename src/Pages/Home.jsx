import Hero from '../components/layout/Hero/Hero'
import HeadSeo from '../components/ui/HeadSeo/HeadSeo'

const Home = () => {
    return (
        <>
            <HeadSeo
                title="Abduazim Mahmudov| Frontend Developer"
                description="Hey, my name is Abbos Valiev, and I’m a frontend developer with a passion for creating seamless and innovative web experiences."
                keywords="Abbos Valiev, Frontend Developer, Web Developer, React Developer, Freelance Developer, Portfolio"
            />
            <div className="page-content">
                <Hero />
            </div>
        </>
    )
}

export default Home