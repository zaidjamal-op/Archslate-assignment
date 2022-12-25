import './App.css'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Header from './components/Header'
import Main from './components/Main'
function App() {

  return (
    <div className="bg-[#fafbfe]">
      <Header />
      <div className="xl:max-w-7xl mx-auto">
        <Banner />
        <Cards />
        <Main/>
      </div>
    </div>
  )
}

export default App
