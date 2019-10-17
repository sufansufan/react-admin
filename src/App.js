import React from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import store from './store/index';
import { Button } from 'antd'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyle></GlobalStyle>
        <Button>111</Button>
        2222
      </div>
    </Provider>
  );
}

export default App;
