import './App.css'
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import { NavigationBar } from './stories/PoschhTech/NavBar/NavBar';
import { Layout1 } from './stories/PoschhTech/TopLayout/TopLayout';

function App() {
  

  return (
    <>
      <NextUIProvider>
      <div className='w-screen h-screen'>
        <NavigationBar  />
        <Layout1 />
        </div>
      </NextUIProvider>
        
        


    </>
  )
}

export default App
