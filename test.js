const tape = require('tape')
const suppplant = require('./')

tape('test', (t) => {
  let string = suppplant('{we.should.all.be.friends}', {
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
  t.plan(1)
  t.equal(string, 'Yes')
  t.end()
})
