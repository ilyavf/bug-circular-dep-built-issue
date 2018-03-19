import portfolio from './portfolio'
console.log('Module Session resolved')

export default {
  rates: 1000,
  logPortfolioBalance () {
    console.log('portfolio.balance = ' + portfolio.balance())
  }
}