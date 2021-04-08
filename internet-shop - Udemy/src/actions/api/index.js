import * as R from 'ramda'

import phones from './mockPhones'

export const fetchPhones = async () => {
    return new Promise((resolve) => {
        resolve(phones)
    })
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