import React from 'react';
import { Provider } from 'react-redux'
import store from '@/store/index';
import { GlobalStyle } from './style'
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "@/routes/index";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
