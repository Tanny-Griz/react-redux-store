import * as R from 'ramda'

export const getPhoneById = (state, id) => R.prop(id, state.phones)

export const getPhones = state => {
    //                         ф-ция для каждого эл      массив
    const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids)
    return phones
}

export const getRendererPhonesLength = state => R.length(state.phonesPage.ids)

export const getTotalBasketCount = state => R.length(state.basket)

export const getTotalBasketPrice = state => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),// [] price
        R.map(id => getPhoneById(state, id))// [] - telephones
    )(state.basket)

    return totalPrice
}