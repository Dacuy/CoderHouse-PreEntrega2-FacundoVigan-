export const fakeApiCall = (products) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }
            , 2000)
    })
}