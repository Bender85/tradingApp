import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tradingBarChat from './tradingBarChart';
import parsingTables from './parsingTables';

const rootReducer = combineReducers({
   routing: routerReducer,
    tradingBarChat,
    parsingTables
});

export default rootReducer;
