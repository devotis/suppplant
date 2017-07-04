'use strict'

const tape = require('tape')
const suppplant = require('./')

const subject = '{we.should.all.be.friends}'

tape('nested with string', (t) => {
  let stringNegative = suppplant(subject, {
    somethingelse: {}
  })
  let stringPositive = suppplant(subject, {
    we: {
      should: {
        all: {
          be: {
            friends: 'Yes'
          }
        }
      }
    }
  })
  t.plan(2)
  t.equal(stringNegative, subject, 'Leaves string as-is')
  t.equal(stringPositive, 'Yes', 'multiple level objects replacement when deepest level is string')
  t.end()
})

tape('nested with number', (t) => {
  let stringNegative = suppplant(subject, {
    somethingelse: {}
  })
  let stringPositive = suppplant(subject, {
    we: {
      should: {
        all: {
          be: {
            friends: 42
          }
        }
      }
    }
  })
  t.plan(2)
  t.equal(stringNegative, subject, 'Leaves string as-is')
  t.equal(stringPositive, '42', 'multiple level objects replacement when deepest level is number')
  t.end()
})

tape('nested with boolean', (t) => {
  let stringNegative = suppplant(subject, {
    we: {
      should: {
        all: {
          be: {
            friends: true
          }
        }
      }
    }
  })
  let stringPositive = suppplant(subject, {
    we: {
      should: {
        all: {
          be: {
            friends: true
          }
        }
      }
    }
  }, {boolean: true})
  t.plan(2)
  t.equal(stringNegative, subject, 'Leave booleans out there in the cold')
  t.equal(stringPositive, 'true', 'boolean option set to true gives love to booleans')
  t.end()
})

tape('nested with stringify objects and arrays', (t) => {
  let stringNegative = suppplant('{we.should}', {
    we: {
      should: {
        all: {
          be: {
            friends: true
          }
        }
      }
    }
  })
  let stringPositive = suppplant('{we.should}', {
    we: {
      should: {
        all: {
          be: {
            friends: true
          }
        }
      }
    }
  }, {stringify: true})
  t.plan(2)
  t.equal(stringNegative, '{we.should}', 'Should not suppplant because it just... shouldn\'t')
  t.equal(stringPositive, '{"all":{"be":{"friends":true}}}', 'Stringifies remainder if that\'s a type of object')
  t.end()
})

tape('nested with stringify objects and arrays', (t) => {
  let stringNegative = suppplant('{we.should}', {
    we: {
      should: {
        all: {
          be: {
            friends: true
          }
        }
      }
    }
  })
  let stringNegative2 = suppplant('{we.should}', {
    we: {
      should: {
        all: {
          be: {
            friends: true
          }
        }
      }
    }
  }, {clear: true})
  let stringPositive = suppplant('{we.should}', {
    somethingelse: {}
  }, {clear: true})
  t.plan(3)
  //d
  t.equal(stringNegative, '{we.should}', 'Should not clear, because clear options wasn\'t set')
  t.equal(stringNegative2, '{we.should}', 'Should not clear, because there is we.should in the data')
  t.equal(stringPositive, '', 'Should clear, because clear option is set AND there is no we.should in the data')
  t.end()
})
