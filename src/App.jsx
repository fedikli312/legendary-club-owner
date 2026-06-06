import './index.css'
import Hero from './components/Hero'
import USPStrip from './components/USPStrip'
import HowItWorks from './components/HowItWorks'
import ManagerQuiz from './components/ManagerQuiz'
import RewardSection from './components/RewardSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <main>
      <Hero />
      <USPStrip />
      <HowItWorks />
      <ManagerQuiz />
      <RewardSection />
      <Footer />
    </main>
  )
}
