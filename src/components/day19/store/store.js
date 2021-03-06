/*
* 创建仓库
* */
import {applyMiddleware, combineReducers, createStore} from "redux";

import thunk from "redux-thunk";


let allDataReducer = function (state = [], action) {

    switch (action.type) {

        case "SAVE_ALL":

            state = action.data;

            console.log(state);
            return JSON.parse(JSON.stringify(state));
        default:
            return state;

    }

};


let chooseReducer = function (state = [], action) {

    switch (action.type) {

        case "SAVE_CHOOSE":
            let flag = false;
            state.some((item, index) => {
                if (item.questionId === action.obj.questionId) {
                    flag = true;
                    return true;
                } else {
                    return false;
                }
            });
            if (!flag) {
                state.push(action.obj);
                console.log(state);
            }
            return JSON.parse(JSON.stringify(state));
        default:
            return state;

    }

};


let reducers = combineReducers({allDataReducer, chooseReducer});


let store = createStore(reducers, applyMiddleware(thunk));

export default store;
