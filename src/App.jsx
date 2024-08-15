import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'
import Counter from './components/counter'

function App() {
  const [first, setfirst] = useState(0)
  console.log(first);

  
  function Add2() {
    setfirst(first + 2)
    console.log("shayan");
    console.log(first);
    
    
  }
function Sub2() {
  setfirst(first - 2 )
}

function mul2() {
  setfirst(first * 2)
}
function div2() {
  setfirst(first / 2)
}

  return (
    <>
      <Counter >
         <h1 className='pt-12'>{first}</h1>
      </Counter>

      <Button background="bg-orange-500" text="Add 2" fun={Add2}></Button>
      <Button background="bg-red-500" text="Sub 2" fun={Sub2}></Button>
      <Button background="bg-yellow-500" text="Mul*2"  fun={mul2}></Button>
      <Button background="bg-green-500" text="Div/2"  fun={div2}></Button>


    </>
  )
}




export default App
