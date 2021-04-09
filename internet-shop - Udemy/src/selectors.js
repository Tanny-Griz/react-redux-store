import * as R from 'ramda'

export const getPhoneById = (state, id) => R.prop(id, state.phones)

export const getPhones = state => {
    // const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids)
    // return phones
    const applySearch = item => R.contains(
        state.phonesPage.search, // к-й сохранили в редьюсер
        R.prop('name', item) // = item.name
    )
    const phones = R.compose(
        R.filter(applySearch),
        R.map(id => getPhoneById(state, id)) // 2. вызываются на этот мар
    )(state.phonesPage.ids) // 1. эти данные 
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

export const getCategories = state => R.values(state.categories)

export const getActiveCategoryId = ownProps => R.path(['match', 'params', 'id'], ownProps)