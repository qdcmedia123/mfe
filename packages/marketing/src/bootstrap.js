import React from "react";
import ReactDOM from "react-dom";
import App from './App';

// Mout function to start up the app
const mount = (el) => {
  ReactDOM.render(<App/>, el);
};
// If we are in development or in isolation all mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
// We are runnin through the container
// and we should export the mount function
