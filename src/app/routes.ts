import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import EmergencyContacts from "./pages/EmergencyContacts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/emergency-contacts",
    Component: EmergencyContacts,
  },
]);
