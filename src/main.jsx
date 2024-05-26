import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PoschLanding from './PoschhLanding';
import { PrivacyPolicy } from './stories/PoschhTech/PrivacyPolicy/PrivacyPolicy';
import { TermsOfUse } from './stories/PoschhTech/TermsofUse/TermsofUse';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PoschLanding/>
    ),
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy/>,
  },
  {
    path: "terms-of-use",
    element: <TermsOfUse/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
