import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import tradingBarChat from './tradingBarChart';
// import parsingTables from './parsingTables';
import { uploads } from './uploads.reducers';

const rootReducer = combineReducers({
   routing: routerReducer,
    // tradingBarChat,
    // parsingTables,
    uploads
});

export default rootReducer;
