import './App.css'
import Button from './components/Button'
import ThemeProvider from './components/ThemeProvider'

function App() {

  return (
    <>
    <ThemeProvider>
      <Button />
    </ThemeProvider>
    </>
  )
}

export default App
