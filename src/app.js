import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import utils from './utils'
import portfolio from './portfolio'

const AppViewModel = DefineMap.extend({
  message: {
    value: 'Hello World!',
    serialize: false
  },
  title: {
    value: 'donejs-chat',
    serialize: false
  },
  amount: {
    get () {
      return utils.inCurrency(71)
    }
  },
  balance: {
    get () {
      return portfolio.balance(33)
    }
  }

});

export default AppViewModel;
