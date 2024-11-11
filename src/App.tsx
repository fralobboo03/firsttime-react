import { useState } from "react"
import './App.css'
import Hellyeah from './components/Hellyeah'
import HotLoad from './components/HotLoad'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => {
          setCount(count + 1);
        }}>
          count is {count}
        </button>

        <Hellyeah text="Liquid" counterFromApp={count} setCounterFromApp={setCount}>
          <HotLoad/>
        </Hellyeah>
      </div>
    </>

  )
}

export default App
