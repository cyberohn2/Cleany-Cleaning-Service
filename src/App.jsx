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
<<<<<<< HEAD
      <header className="relative max-w-[1440px] mx-auto">
        <Navigation />
        <Hero />
        <div className="bg-[#80C1EF] absolute inset-y-0 right-0 rounded-bl-[350px]"></div>
=======
      <header>
        <Navigation />
        <Hero />
>>>>>>> ce4a7889143b3f800feb6db2883a39a12ffcb543
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
