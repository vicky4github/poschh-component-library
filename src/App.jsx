import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import TableMain from './components/TableMain';

 function ImgCont() {
  return (
    <Image
    width={300}
    height={200}
    isZoomed
    alt="NextUI hero Image with delay"
    src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
  />
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<NextUIProvider>
<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <ImgCont/>
    <TableMain/>
    </NextUIProvider>
  
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
