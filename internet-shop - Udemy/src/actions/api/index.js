import * as R from 'ramda'
import request from 'superagent'

import phones from './mockPhones'
import categories from './mockCategories'

export const fetchPhones = async () => {
    const {body} = await request.get('http://www.mocky.io/v2/5918bc6b120000701040dbec')
    return body.phones
    // return new Promise((resolve) => {
    //     resolve(phones)
    // })
}

export const loadMorePhones = async ({offset}) => {
    //если реальный апи: fetch.get(`http://google.com/api/phones?offset=${offset}`)
    return new Promise((resolve) => {
        resolve(phones)
    })
}

export const fetchPhoneById = async (id) => {
    return new Promise((resolve) => {
        const phone = R.find(R.propEq('id', id), phones)
        resolve(phone)
    })
}

export const fetchCategories = async () => {
    return new Promise((resolve) => {
        resolve(categories)
    })
}