import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PoschLanding from './PoschhLanding';
import { PrivacyPolicy } from './stories/PoschhTech/PrivacyPolicy/PrivacyPolicy';
import { TermsOfUse } from './stories/PoschhTech/TermsofUse/TermsofUse';
import { AnalyticsPage } from './stories/PoschhTech/Analytics/Analytics';
import SecurityPage from './stories/PoschhTech/Security/Security';
import { Footer } from './stories/PoschhTech/Footer/Footer';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PoschLanding/>
    ),
  },
  {
    path: "privacy-policy",
    element: <><PrivacyPolicy/><Footer/></>,
  },
  {
    path: "terms-of-use",
    element: <><TermsOfUse/><Footer/></>,
  },
  {
    path: "analytics",
    element: <AnalyticsPage/>,
  },
  {
    path: "security",
    element: <SecurityPage/>,
  },
]);

const MainApp=()=>{
  
  return(<>
    <Toaster />
  
    <RouterProvider router={router}/>
    </>)
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <MainApp />
);
