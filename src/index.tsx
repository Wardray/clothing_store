import React from "react";
import ReactDOM from "react-dom/client";
import { extensions } from "./core/extensions/extensions";
import { RouterProvider } from "react-router-dom";
import { router } from "./core/routers/routers";
import { SessionManager } from "./features/session_manager/session_manager_screen";
extensions();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SessionManager child={<RouterProvider router={router} />} />
  </React.StrictMode>
);
