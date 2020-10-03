import {
    FETCH_PHONES_SUCCESS
} from "../actionTypes";
import * as R from 'ramda';

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            const newValue = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValue)
        default:
            return state
    }
}