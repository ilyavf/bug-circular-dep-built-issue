import session from './session'
console.log('Module Utils resolved')

export default {
  inCurrency (amount = 0) {
    return session.rates * amount
  }
}