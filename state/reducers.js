import { combineReducers } from 'redux';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { UPDATE_USER } from '../actions/user';

const user  = (user = { email: '', name: '' }, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return action.user
        default:
            return user;
    }
}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
  };

export default combineReducers({
    user: persistReducer(persistConfig, user),
});