[![Build Status](https://travis-ci.org/devotis/node-suppplant.svg)](https://travis-ci.org/devotis/node-suppplant)
[![npm version](https://badge.fury.io/js/suppplant.svg)](https://www.npmjs.org/package/suppplant)

Suppplant -- yes, 3 p's
=======================

This is officially a thing now. Suppplant with 3 p's. It's Crockford's `supplant` method but with support for multiple level objects. I needed it today. It was [asked before](https://stackoverflow.com/questions/12910430/crockfords-supplant-with-multiple-level-objects) and answered in 2012. The credits for the solution without the new options object go to [Bergi](https://stackoverflow.com/users/1048572/bergi) who posted the answer back then.

## Usage

```javascript
const suppplant = require('suppplant')

suppplant('{we.should.all.be.friends}', {
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
// 'Yes'

suppplant('{we.should.all.be.friends}', {
  somethingelse: {}
})
// '{we.should.all.be.friends}'

suppplant('{we.should.all.be.friends}', {
  we: {
    should: {
      all: {
        be: {
          friends: true
        }
      }
    }
  }
}, {boolean: true}) // <-- Check out the new options object!
// 'true'

suppplant('{we.should}', {
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
// '{"all":{"be":{"friends":true}}}'

suppplant('{we.should.all.be.friends}', {
  somethingelse: {}
}, {clear: true})
// ''

// but,

suppplant('{we.should}', {
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
// '{we.should}'

// Does not clear, because there is that data
```

## Install

```javascript
npm install suppplant
```

## Credits

As mentioned before, credits for the 1.0 solution go to [Bergi](https://stackoverflow.com/users/1048572/bergi).
