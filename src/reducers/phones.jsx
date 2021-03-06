import {
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS,
    FETCH_PHONES_BY_ID_SUCCESS
} from "../actionTypes";
import * as R from 'ramda';

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            const newValue = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValue)
        case LOAD_MORE_PHONES_SUCCESS:
            const moreValue = R.indexBy(R.prop('id'), payload)
            return R.merge(state, moreValue)
        case FETCH_PHONES_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state)
        default:
            return state
    }
}