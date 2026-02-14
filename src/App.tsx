import { Routes, Route } from 'react-router-dom'
import HomePage from './app/page.jsx'
import CountryDetail from './components/CountryDetail.jsx' 
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:country" element={<CountryDetail />} />
      </Routes>
    </>
  )
}

export default App