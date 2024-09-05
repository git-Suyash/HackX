import Header from "./components/Header"
import Landing from "./components/Landing"
import ChatbotComponent from "./components/ChatbotComponent"
import './App.css'
import CardGrid from "./components/CardGrid"
import ContactForm from "./components/ContactForm"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <Header />
      <ChatbotComponent />
      <Landing />
      <CardGrid />
      <ContactForm />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
