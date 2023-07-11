import { useState } from 'react'
import './App.css'
import './styles/main.scss'
import { Card } from 'react-bootstrap'

function App() {
   const [count, setCount] = useState(0)

   return (
      <>
         <Card>
            <h1>Vite + React Boilerplate</h1>
            <div>
               <button
                  onClick={() => {
                     setCount((count) => count + 1)
                  }}>
                  count is {count}
               </button>
               <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
               </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
         </Card>
      </>
   )
}

export default App
