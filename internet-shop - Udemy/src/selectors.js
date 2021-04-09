import * as R from 'ramda'

export const getPhoneById = (state, id) => R.prop(id, state.phones)

export const getActiveCategoryId = ownProps => R.path(['match', 'params', 'id'], ownProps)

export const getPhones = (state, ownProps) => {
    // const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids)
    // return phones
    
    const activeCategoryId = getActiveCategoryId(ownProps)
    const applySearch = item => R.contains(
        state.phonesPage.search, // к-й сохранили в редьюсер
        R.prop('name', item) // = item.name
    )
    const applyCategory = item => R.equals(
        activeCategoryId,
        R.prop('categoryId', item)
    )
    const phones = R.compose(
        R.filter(applySearch), // фильтр по поиску
        R.when(R.always(activeCategoryId), R.filter(applyCategory)), // если есть активная категория, фильтруем по ней, если нет - то ничего не делает
        R.map(id => getPhoneById(state, id)) // 2. вызываются на этот мар/получили телефоны
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

export const getBasketPhonesWithCount = state => {
    const phoneCount = id => R.compose(
        R.length,
        R.filter(basketId => R.equals(id, basketId))
    )(state.basket)
    const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone)
    const uniqueIds = R.uniq(state.basket)
    const phones = R.compose(
        R.map(phoneWithCount),
        R.map(id => getPhoneById(state, id))
    )(uniqueIds)

    return phones
}