import utils from './utils'
console.log('Module Portfolio resolved')

const Portfolio = function () {
}

Portfolio.balance = function () {
  return utils.inCurrency(5)
}

export default Portfolio
