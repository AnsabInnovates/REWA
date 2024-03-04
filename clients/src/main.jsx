import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import{Auth0Provider} from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Auth0Provider
   domain="dev-jtjhierm8mrjuci2.us.auth0.com"
   clientId="vxFY1xdAXSEbZZTBNlN4oUTfy48zwiqJ"
   authorizationParams={{
    redirect_uri:"http://localhost:5173"

  }}
  audience="http://localhost:8000"
  scope="openid profile email"
   >
      <MantineProvider>
    <App />
    </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
