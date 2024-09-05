import Header from "../components/Header"
import Landing from "../components/Landing"
import ChatbotComponent from "../components/ChatbotComponent"
import CardGrid from "../components/CardGrid"
import ContactForm from "../components/ContactForm"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import CostBenefitCalculator from "../components/CostBenefitCalculator"

function MainPage() {
    return (
        <div className="container mx-auto px-4 max-w-7xl">
      <Header />
      <ChatbotComponent />
      <Landing />
      <CardGrid />
      <CostBenefitCalculator />
      <ContactForm />
      <Contact />
      <Footer />
    </div>
    )
}

export default MainPage