import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducer from "./reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // 这里使用的是redux的增强函数因为createStore只能传连个参数
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store
