
import { ConfigProvider } from 'antd'
import './App.css'
import LandingPage from './Pages/LandingPage'

function App() {
  return (
    <>
      <ConfigProvider  theme={{
        token: {
          colorPrimary: "#2E3094",
          colorFillSecondary: "white",
        },
        
        
      }}>
        <LandingPage />
      </ConfigProvider >
    </>
  )
}

export default App
