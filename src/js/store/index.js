import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from  '../reducers/index';
import {forbiddenWordsMiddleware} from '../middlewares/index';
import thunk from 'redux-thunk';
  const storeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhances(applyMiddleware(forbiddenWordsMiddleware,thunk)));
export default store;