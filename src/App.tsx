import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { I18nProvider } from "@lingui/react";
import { Trans } from "@lingui/macro";
const esCatalog = require(`./locales/es/messages.js`);
const frCatalog = require(`./locales/fr/messages.js`);

const App: React.FC = () => {
  return (
    <I18nProvider language="es" catalogs={{ es: esCatalog, fr: frCatalog }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            <Trans>Message Inbox</Trans>
          </h1>
          <p>
            <Trans>
              Edit <code>src/App.tsx</code> and save to reload.
            </Trans>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </I18nProvider>
  );
};

export default App;
