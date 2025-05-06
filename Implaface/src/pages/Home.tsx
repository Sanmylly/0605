import Header from '../Header'
import Footer from '../Footer'
import HeroHome from '../Home/HeroHome'
import Home from '../Home/Home'
import Section3 from '../Home/section3'
import Contact from '../Home/Contact'
import CTAHome1 from '../Home/CTAHome'
import CAD from '../Home/CAD'

function HomePage() {
    return (
      <div>
        <Header />
        <HeroHome /> 
        <Home/>
        <CAD/>
        <Section3 />
        <CTAHome1 />
        <Contact />
        <Footer />
      </div>
        
      
    )
  }

  export default HomePage;