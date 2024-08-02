import Navigation from "./Components/Navigation"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Services from "./Components/Services"
import Team from "./Components/Team"
import Pricing from "./Components/Pricing"
import Testimonials from "./Components/Testimonials"
import CallToAction from "./Components/CallToAction"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <header className="relative max-w-[1440px] mx-auto">
        <Navigation />
        <Hero />
        <div className="bg-[#80C1EF] absolute inset-y-0 right-0 w-[706px] rounded-bl-[350px]"></div>
      </header>
      <About />
      <Services />
      <Team />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
