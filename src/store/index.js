
import { createStore, combineReducers} from 'redux';
import {} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logsReducer from './logReducer/logsReducer';

const persistConfig = {
    key: 'root',
    storage,
};


const rootReducer = combineReducers({
    logsReducer: logsReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };