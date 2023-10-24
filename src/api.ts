const conta = {
    email: 'helio@dio.bank',
    password: '123456',
    name: 'Hélio Maia',
    balance: 5000,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
