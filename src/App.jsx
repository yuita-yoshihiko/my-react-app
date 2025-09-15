import Header from './Header'
import MainContent from './MainContent'
import CardSection from './CardSection'
import Footer from './Footer'
import GreetingSection from './GreetingSection'
import CardExample from './CardExample'
import ClickExample from './ClickExample'
import InputExample from './InputExample'
import EventExample from './EventExample'
import FormExample from './FormExample'
import Counter from './Counter'
import MessageApp from './MessageApp'
import BasicEffect from './BasicEffect'
import UserData from './UserData'
import Timer from './Timer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div className="flex-1">
        <MainContent />
        <CardSection />
        <GreetingSection />
        <CardExample />
        <ClickExample />
        <InputExample />
        <EventExample />
        <FormExample />
        <Counter />
        <MessageApp />
        <BasicEffect />
        <UserData />
        <Timer />
      </div>

      <Footer />
    </div>
  )
}

export default App
