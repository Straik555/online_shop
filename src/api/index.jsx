import * as R from 'ramda';
import request from 'superagent';

import phones from './mockPhones';
import categories from './mockCategories';

export const fetchPhones = async () => {
    const api = 'https://run.mocky.io/v2/5918bc6b120000701040dbec'
    // return new Promise((resolve, reject) => {
    //     resolve(phones);
    // })
    const {body} = await request.get(
        api

    )
    return body.phones
}

export const loadMorePhones = async ({offset}) => {
    return new Promise((resolve, reject) => {
        resolve(phones);
    })
}

export const fetchPhoneById = async (id) => {
    return new Promise((resolve, reject) => {
        const phone = R.find(R.propEq('id', id), phones)
        resolve(phone)
    })
}

export const fetchCategories = async (id) => {
    return new Promise((resolve, reject) => {
        resolve(categories)
    } )
}